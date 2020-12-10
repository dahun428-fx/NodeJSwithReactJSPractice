/**
 * express 라이브러리 설치해서, require 함수로 해당 라이브러리 임포트
 */
const express = require('express');
/**
 * express 함수를 실행해서 app 함수에 넣기
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
 * express 서버를 활용해서 라이브러리 사용
 */
app.use(cors());
/**
 * express 서버를 활용해서 parser의 json 사용
 */
app.use(bodyParser.json());
/**
 * api uri를 활용해서 json 전송
 */
app.use('/api', (req, res)=> res.json({username:'정다훈'}));

/**
 * 출력
 */
app.listen(port, ()=>{
    console.log(`express server is running on ${port}`);
})
