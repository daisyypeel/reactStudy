import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 기본실습
/*
import Library from './chapter_03/Library';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);
*/


// 시계 실습
/*
import Clock from './chapter_04/Clock';

setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Clock/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 1000);
*/


// 댓글 컴포넌트 만들기
/*
import CommentList from './chapter_05/CommentList';

ReactDOM.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>,
  document.getElementById('root')
)

*/



// State 사용하기 실습
// import NotificationList from './chapter_06/NotificationList';

// event handler 버튼클릭 실습
// import ConfirmButton from './chapter08/ConfirmButton';

// Landing Page 실습
// import LandingPage from './chapter09/LandingPage';

// 학생리스트 만들기 실습
// import AttendanceBook from './chapter10/AttendanceBook';

// 사용자정보입력 실습
// import SignUp from './chapter11/Signup';

// 섭씨화씨 실습
// import Calculator from './chapter12/Calculator';

// styled-components
// import Blocks from './chapter15/Blocks';





const root = ReactDOM.createRoot(document.getElementById("root")); //v18버전 에러로 아래 document~를 이렇게 수정함

root.render(// v18에러로 ReactDOM을 root로 수정함
  <React.StrictMode>
    <App />
  </React.StrictMode>, // StrictMode는 v18에서 에러 남?
  // document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
