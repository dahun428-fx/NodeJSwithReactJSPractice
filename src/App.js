import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * react의 component를 활용
 */
class App extends React.Component {
  /**
   * 생성자
   * @param {}} props 
   */
    constructor(props) {
        super(props);
        this.state = {
            username:null
        };
    } 
  /**
   * 외부 서버 fetch , mount
   */
  componentDidMount(){
    fetch('http://localhost:3001/api')
         .then(res => res.json())
         .then(data => this.setState({username:data.username}));
  }
  /**
   * 렌더링 시작
   */
	render() {
    const {username} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            {username ? `Hello ${username}` : 'Hello World'}
          </header>
        </div>
    );
    ;
  }
}

export default App;
