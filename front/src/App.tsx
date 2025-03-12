import React, { ChangeEvent, useState } from 'react';
import './App.css';
import InputBox from 'components/inputBox';// InputBox 컴포넌트를 import합니다.

// <InputBox /> 이렇게 return 에 넣어주면 export 한거를 여기서 받아와서 사용한다
function App() {
 
  //이렇게 해서 inputbox만 생성 해서 테스트 
  return (
    <>
      <div className='text-link-lg full-width'>회원가입</div>
      <div className='kakao-sign-in-button'></div>
      <div className='naver-sign-in-button'></div>
    </>
  );
}

export default App;
