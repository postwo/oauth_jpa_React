import {forwardRef} from 'react';

// 여기다가 타입지정
interface Props{

}


// forwardRef = 컴포넌트가 상위 컴포넌트로부터 ref를 전달받아 DOM 요소나 컴포넌트 인스턴스에 접근할 수 있도록 하는 함수
// <HTMLInputElement(=input 요소의 타입을 지정),Props(=Props는 사용자가 정의한 타입으로, 이 컴포넌트가 어떤 속성들을 받을지 정의)>
const InputBox = forwardRef<HTMLInputElement,Props>((props: Props,ref)=>{

    //반환할 html을 작성
    return (
        <div className='input-box'>
            <div className='input-box-title'>{'아이디'}</div>
            <div className='input-box-content'>
                <input className='input-box-input'/>
                <div className='input-box-button'>{'중복 확인'}</div>
            </div>
            <div className='input-box-message'>{'사용 가능한 아이디 입니다.'}</div>
        </div>
    );
});

// 모듈을 기본으로 내보내는 것을 의미 즉, 다른 파일에서 이 모듈을 import할 때 기본으로 가져올 수 있게 한다
export default InputBox;