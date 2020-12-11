import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
// import MyWork from './MyWork';
// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';
// import ForceUpdateExample from './example/ForceUpdateExample';
import Customer from './components/Customer';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import CircularProgress from '@material-ui/core/CircularProgress';
import LifeCycleSample from './LifeCycleSample';
import CustomerAdd from './components/CustomerAdd';
// /**
//  * react의 component를 활용
//  */
// class App extends React.Component {
//   /**
//    * 생성자
//    * @param {}} props 
//    */
//     constructor(props) {
//         super(props);
//         this.state = {
//             username:null
//         };
//     } 
//   /**
//    * 외부 서버 fetch , mount
//    */
//   componentDidMount(){
//     fetch('api/group')
//          .then(res => res.json())
//          .then(data => this.setState({username:data.username}));
//   }
//   /**
//    * 렌더링 시작
//    */
// 	render() {
//     const {username} = this.state;

    
//     return (
//         <div className="App">
//           <header className="App-header">
//             <p className="rebeccapurple"> {username ? `Hello ${username}` : 'Hello World'}</p>
//           </header>
//         </div>
//     );
//     ;
//   }
// }
// const App = () => {
//   return <MyWork/>
// };
// const App = () => {
//   return <MyComponent/>;
// };
// const App = () => {
//     return <ForceUpdateExample/>;
// };
const customers = [
  {
    'id':1,
    'image':'./images/아이유1.jpeg',
    'name':'아이유',
    'birthday':'1993-05-13',
    'gender':'여자',
    'job':'가수'
  }
,
{
  'id':2,
  'image':'./images/아이유1.jpeg',
  'name':'아이유',
  'birthday':'1993-05-13',
  'gender':'여자',
  'job':'가수'
}

,{
  'id':3,
  'image':'./images/아이유1.jpeg',
  'name':'아이유',
  'birthday':'1993-05-13',
  'gender':'여자',
  'job':'가수'
}



]


// const App = () => {
  
//   return (
//     <Table>
//      <TableHead>
// 			<TableRow>
// 			<TableCell>번호</TableCell>
// 			<TableCell>이미지</TableCell>
// 			<TableCell>이름</TableCell>
// 			<TableCell>생년월일</TableCell>
// 			<TableCell>성별</TableCell>
// 			<TableCell>직업</TableCell>
// 			</TableRow>
// 			</TableHead>

//       <TableBody>

//       {customers.map(customer => { 
// 			  return  <Customer  key = {customer.id} 
// 			                     id={customer.id}
//                           image={customer.image}
//                           name={customer.name}
//                           birthday={customer.birthday}
//                           gender={customer.gender}
//                           job={customer.job} 
//                 />
// 			  })
// 			}


//       </TableBody> 
//     </Table>

//   ) 
// };
// export default App;
const styles = theme => ({
  root: {
  width: "100%",
  marginTop: theme.spacing.unit * 3,
  overflowX: "auto"
  },
  table: {
  minWidth: 1080
  },
  progress: {
    margin:theme.spacing.unit*2
  }
  });
  function getRandomColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16); 
  }
class App extends React.Component {

//   state = {
//     customers:'',
//     completed: 0
//   }

//   componentDidMount(){
//     //비동기 방식 데이터 요청
//     this.callApi()
//                   .then(response => this.setState({customers:response}))
//                   .catch(error => console.log(error));
//   }
//   componentWillUnmount(){
//     clearInterval(this.timer);
//   }
//   callApi = async () =>{
//     //api/customers uri 를 통해 받은 응답을 비동기방식으로 요청해라.
//     const response = await fetch('/api/customers');
//     //받은 응답을 json으로 변경해라
//     //json 으로 받은 내용을 body 변수에 비동기 방식으로 저장해라.
//     const body = await response.json();
//     return body;
//   }
//   progress = () =>{
//     //completed function key = completed
//     const {completed} = this.state;
//     //json 형식으로 setState 한다 ----> completed : 0, ex) name : "name"
//     this.setState({completed : completed > 100 ? 0 : completed + 1});
//   }

//   render() {
// 		return (
//       <Table>
// 			<TableHead>
// 			<TableRow>
// 			<TableCell>번호</TableCell>
// 			<TableCell>이미지</TableCell>
// 			<TableCell>이름</TableCell>
// 			<TableCell>생년월일</TableCell>
// 			<TableCell>성별</TableCell>
// 			<TableCell>직업</TableCell>
// 			</TableRow>
// 			</TableHead>
// 			<TableBody>
// 			{this.state.customers &&
// 			 this.state.customers.map(customer => { 
// 			     return  <Customer  key = {customer.id} 
// 			                     id={customer.id}
// 								image={customer.image}
// 								name={customer.name}
// 								birthday={customer.birthday}
// 								gender={customer.gender}
// 								job={customer.job} />
// 			  })
// 			}
// 			<TableRow>
// 			<TableCell colSpan="6"  align="center">
// 			<CircularProgress  className={styles.progress} 
// 			      variant="determinate" value={this.state.completed} />
// 			</TableCell>
// 			</TableRow>
// 			</TableBody>
// 			</Table>
// 			);
// 	}

 
  // state = {
  //   color:'#000000'
  // }
  // handleClick = () => { 
  //   this.setState({ color: getRandomColor() });
  // }
  
  // render() {
  //   return (
  //     <div>
  //       <button onClick={this.handleClick}>랜덤 색상</button>
  //       <LifeCycleSample color={this.state.color}/>
  //     </div>
  //   );
  // }

  constructor(props){
    super(props);
    this.state = {
      customers : '',
      completed : 0
    }
    this.stateRefresh = this.stateRefresh.bind(this);
  }

  stateRefresh(){
    this.setState({
      customers : '',
      completed : 0
    });
    
    this.callApi()
                  .then(response => this.setState({customers:response}))
                  .catch(error => console.log(error));
  }
  callApi = async () =>{
        //api/customers uri 를 통해 받은 응답을 비동기방식으로 요청해라.
        const response = await fetch('/api/customers');
        //받은 응답을 json으로 변경해라
        //json 으로 받은 내용을 body 변수에 비동기 방식으로 저장해라.
        const body = await response.json();
        return body;
  }
  componentDidMount(){ //비동기 방식 데이터 요청
    this.timer = setInterval(this.progress, 20);
    this.callApi()
                  .then(response => this.setState({customers:response}))
                  .catch(error => console.log(error));

  }
  progress = () =>{
        //completed function key = completed
        const {completed} = this.state;
        //json 형식으로 setState 한다 ----> completed : 0, ex) name : "name"
        this.setState({completed : completed > 100 ? 0 : completed + 1});
  }
   render() {
		return (
      <div>
     <Table className={styles.table}>
     <TableHead>
     <TableRow>
     <TableCell>번호</TableCell>
     <TableCell>이미지</TableCell>
     <TableCell>이름</TableCell>
     <TableCell>생년월일</TableCell>
     <TableCell>성별</TableCell>
     <TableCell>직업</TableCell>
     </TableRow>
     </TableHead>
     <TableBody>
     {this.state.customers?
      this.state.customers.map(customer => { 
          return  <Customer stateRefresh={this.stateRefresh} 
                           key = {customer.id} 
                          id={customer.id}
                    image={customer.image}
                    name={customer.name}
                    birthday={customer.birthday}
                    gender={customer.gender}
                    job={customer.job} />
       }) :
      
     <TableRow>
     <TableCell colSpan="6"  align="center">
     <CircularProgress  className={styles.progress} 
           variant="determinate" value={this.state.completed} />
     </TableCell>
     </TableRow>
     }
     </TableBody>
     </Table>
     <CustomerAdd stateRefresh={this.stateRefresh} />
     </div>

			);
    
  }
}

export default App;
