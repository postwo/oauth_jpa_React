import {ChangeEvent, forwardRef, KeyboardEvent} from 'react';

// ./는 현재 파일이 위치한 디렉토리(폴더)를 가리킵니다. 따라서 ./style.css는 현재 파일과 같은 디렉토리에 있는 style.css 파일을 가져오는 것을 의미
// ./: 현재 파일이 위치한 디렉토리
import './style.css'; 

// 여기다가 타입지정
interface Props{ // 외부에서 받아오는것들을 여기다가 정리 , //?는 와도 되고 안와도 된다는 뜻이다
    
    title: string; // 제목 속성, 문자열 형태로 받아옵니다.
    placeholder: string; // placeholder 텍스트 속성, 문자열 형태로 받아옵니다.
    type: 'text' | 'password'; // input 필드의 타입 속성, 'text' 또는 'password' 중 하나를 받아옵니다.
    value: string; // input 필드의 값 속성, 문자열 형태로 받아옵니다.
    isErrorMessage?: boolean; // 에러 메시지 여부를 나타내는 속성, 선택 사항이며 불리언 형태입니다.
    buttonTitle?: string; // 버튼 제목 속성, 선택 사항이며 문자열 형태입니다. ?는 선택 사항을 의미합니다.
    message?: string; // 메시지 속성, 선택 사항이며 문자열 형태입니다.
    onChange: (event: ChangeEvent<HTMLInputElement>) => void; 
    onKeydown?: (event: KeyboardEvent<HTMLInputElement>) => void; //?는 와도 되고 안와도 된다는 뜻이다, 엔터 누를시 동작
    onButtonClick?: () => void; // 모든 버튼 클릭 시 호출되는 함수, 선택 사항입니다.
}


// forwardRef = 컴포넌트가 상위 컴포넌트로부터 ref를 전달받아 DOM 요소나 컴포넌트 인스턴스에 접근할 수 있도록 하는 함수
// <HTMLInputElement(=input 요소의 타입을 지정),Props(=Props는 사용자가 정의한 타입으로, 이 컴포넌트가 어떤 속성들을 받을지 정의)>
const InputBox = forwardRef<HTMLInputElement,Props>((props: Props,ref)=>{

    //인터페이스 Props에서 정의한 속성들을 컴포넌트의 props로 받았을 때, 각 속성을 알맞은 타입으로 지정해주는 의미
    const { title, placeholder, type, value, isErrorMessage, buttonTitle,message, onChange, onKeydown, onButtonClick } = props;

    //빈 문자열('')이면 'input-box-button-disable' 클래스를 사용 렇지 않으면 'input-box-button' 클래스를 사용 밑의도 같음
    const buttonClass = value  === '' ? 'input-box-button-disable' : 'input-box-button';
    const messageClass = isErrorMessage ? 'input-box-message-error': 'input-box-message';


    //반환할 html을 작성
    //{}안에다가 매칭해주는 변수들은 다 외부에서 받아오는 값들을 대입한다 
    return (
        <div className='input-box'>
           
            <div className='input-box-title'>{title}</div>
           
            <div className='input-box-content'>
                <div className='input-box-body'>
                    <input ref={ref} className='input-box-input' placeholder={placeholder} type={type} value={value} onChange={onChange} onKeyDown={onKeydown}/>
                    {buttonTitle !== undefined && onButtonClick !== undefined && <div className={buttonClass} onClick={onButtonClick}>{buttonTitle}</div>}
                </div>
                {message !== undefined && <div className={messageClass}>{message}</div>}
            </div>
        </div>
    );
});

// 모듈을 기본으로 내보내는 것을 의미 즉, 다른 파일에서 이 모듈을 import할 때 기본으로 가져올 수 있게 한다
export default InputBox;