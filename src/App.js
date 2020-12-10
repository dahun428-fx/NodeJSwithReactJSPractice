import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import MyWork from './MyWork';
// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';
import ForceUpdateExample from './ForceUpdateExample';
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
const App = () => {
    return <ForceUpdateExample/>;
};
export default App;
