import React from 'react';
import './App.css';
import InputBox from 'components/inputBox';// InputBox 컴포넌트를 import합니다.

// <InputBox /> 이렇게 return 에 넣어주면 export 한거를 여기서 받아와서 사용한다
function App() {
  return (
    <>
        <InputBox />
    </>
  );
}

export default App;
