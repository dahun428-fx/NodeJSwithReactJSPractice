/**
 * express 라이브러리 설치해서, require 함수로 해당 라이브러리 임포트
 */
const express = require('express');
//oracle db load
const oracleDB = require('oracledb');
//파일 업로드 multer 라이브러리
const multer = require('multer');

/**
 * express 함수를 실행해서 app 변수에 넣기
 */
const app = express();
/**
 * Access-Control-Allow-Origin 관련 오류 발생을 방지하기 위해서(도메인이 다른 곳에서 요청이 왔기 때문에 허용안함)
 * 해당 라이브러리 설치 후 요청
 */
const cors = require('cors');
/**
 * json parser를 위해서 body parser 내역 요청
 */
const bodyParser = require('body-parser');
/**
 * 3001 번 포트를 이용해서 접속 
 */
const port =process.env.PORT || 3001;
/**
 * route 변수에 routes 폴더의 index.js 파일 route 등록 route
 */
const route = require('./routes/index');
const { request, response } = require('express');
/**
 * express 서버를 활용해서 라이브러리 사용
 */
//app.use(cors());
/**
 * express 서버를 활용해서 parser의 json 사용
 */
app.use(bodyParser.json());
/**
 * api uri를 활용해서 json 전송
 */
// app.use('/api', (req, res)=> res.json({username:'정다훈'}));
// app.use('/api', route);
app.use('/image/', express.static('./public/images'));
const upload = multer({dest : './public/images'});


const conf = {
    "user" : "hr",
    "password" : "zxcv1234",
    "connectString" : "localhost/xe"
}


app.get('/api/customers', (request, response)=>{
   
    //오라클 DB와 연결, conf(설정), (에러, 연결시) 받을 콜백함수
    oracleDB.getConnection(conf, (err, conn)=>{
        //커넥션에 대한 에러처리
        if(err){
            console.log(err.message);
            return ;
        } 
        //커넥션 시행 --> SQL 수행
        let sql = `select id, image, name, birthday, gender, job from customer
                    where isDeleted = 0
                    order by id asc`;
        conn.execute(sql, [], 
        function(err, result) {
            if(err){
             console.log(err.message);
             return;
             }
            console.log(result);
            datas = result.rows.map(function(item, index){
                   return { "key": item[0],
                           "id": item[0],
                         "image": item[1],
                         "name": item[2],
                         "birthday": item[3],
                         "gender": item[4],
                         "job": item[5]
                      };
            });   //map() end
            response.json(datas);
         }); 
    });
});
/**
 * 출력
 */
//post 방식 연결
app.post('/api/customers', upload.single('image') ,(request, response)=>{
    oracleDB.getConnection(conf, (err, conn)=>{
        if(err){
            console.log(err.message);
            return ;
        } 
        let sql = `INSERT INTO CUSTOMER (id, image, name, birthday, gender, job)
                    VALUES (customer_seq.nextval, :image, :name, :birthday, :gender, :job)`;
        let image = './images/' + request.file.filename;
        let name = request.body.name;
        let birthday = request.body.birthday;
        let job = request.body.job;
        let gender = request.body.gender;
        let param = [image, name, birthday, gender, job];
        console.log(param);
        console.log('name',name);
        console.log('birthday',birthday);
        console.log('job',job);
        console.log('gender',gender);
       
        
        conn.execute(sql, param, function(err, result){
            if(err){
                console.log(err.message);
                return;
            }
            console.log(result.rowsAffected);
            response.send(''+result.rowsAffected);

        });
        conn.commit();
    });
});
app.delete('/api/customers/:id', (request, response)=>{
    oracleDB.getConnection(conf, (err, conn)=>{
        if(err){
            console.log(err.message);
            return ;
        } 
        let sql = `UPDATE customer
                    SET isDeleted = 1
                    WHERE id = :id`;
        let params = [request.params.id];
        conn.execute(sql, params, function(err, result){
            console.log('execute');
            if(err){
                console.log(err.message);
                return;
            }
            console.log(result.rowsAffected);
            response.send(''+result.rowsAffected);
        })
        conn.commit();
    })
})



app.listen(port, ()=>{
    console.log(`express server is running on ${port}`);
})
