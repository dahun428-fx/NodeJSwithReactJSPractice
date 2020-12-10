/**
 * JSX를 사용하기 위한 필 수 선언
 */
import React from 'react';
/**
 * 컴포넌트라는 것을 화면에 그리기위한 라이브러리
 * React/JSX를 사용하면 자바스크립트 코드 내부에서 HTML 작성가능
 * JSX 는 변수 또는 상수 값을 태그 내부에 곧바로 채워넣을 수 있습니다.
 * 템플릿 엔진처럼 사용
 * 바벨에 의해 자바스크립트로 변환되고 실행됩니다.
 * 컴포넌트의 이름 첫번째 글자는 반드시 대문자
 * import 문에서 파일 이름의 확장자를 생략해도 해당 파일을 자동으로 찾을 수 있게 설정 되어 있다.
 *  (webpack moduel resolution 이 처리 해준다.)
 */
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
 하나의 ui 형태를 컴포넌트
  --> class
  --> 태그로 사용
  --> 반환하는 내용을 웹 페이지에 렌더링
  App --> ./App.js 파일로부터 불러들어온 ClassName = "App"
  을 <App /> 로 불러 들여 온다.

  document.getElementById('root')는
  index.html div id ="root" 안에 rendering 하겠다는 선언이다.

  --> ReactDOM.render();
    <React.StrictMode> ==>리액트 공식문서에 따르면,
        "StrictMode는 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구입니다. 
        Fragment와 같이 UI를 렌더링하지 않으며, 자손들에 대한 부가적인 검사와 경고를 활성화합니다."
    <React.StrictMode>

    node express 연동 설정
    1. 기존 node 서버를 닫는다 
    2. aplication 파일로 이동 cmd ---> cd/~
    3. npm init 명령어 입력
    4. 프로젝트 초기설정 
    5. express 라이브러리 설치 --->  npm add express --save 
    6. body-parser --> npm install body-parser ;; 서버에서 JSON 형식으로 데이터를 주고 받기위해서 

*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
