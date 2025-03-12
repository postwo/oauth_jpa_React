import React, { ChangeEvent, useState } from 'react';
import './App.css';
import InputBox from 'components/inputBox';// InputBox 컴포넌트를 import합니다.

// <InputBox /> 이렇게 return 에 넣어주면 export 한거를 여기서 받아와서 사용한다
function App() {
 
  const [id,setId] =useState<string>('');

  const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>{
    const {value} = event.target;
    setId(value);
  }

  const onIdButtonClickHandler= () => {

  }
 
  //이렇게 해서 inputbox만 생성 해서 테스트 
  return (
    <>
        <InputBox title='아이디' placeholder='아이디를 입력해주세요'type='text' value={id} onChange={onIdChangeHandler} buttonTitle='중복확인' onButtonClick={onIdButtonClickHandler} message='사용 가능한 아이디 입니다' isErrorMessage={false}/>
    </>
  );
}

export default App;
