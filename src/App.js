import React, {Component} from 'react';
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


const App = () => {
  return (
    <Table>
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

      {customers.map(customer => { 
			  return  <Customer  key = {customer.id} 
			                     id={customer.id}
                          image={customer.image}
                          name={customer.name}
                          birthday={customer.birthday}
                          gender={customer.gender}
                          job={customer.job} 
                />
			  })
			}


      </TableBody> 
    </Table>

  ) 
};
export default App;
