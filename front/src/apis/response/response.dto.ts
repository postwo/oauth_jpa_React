import { ResponseCode, ResponseMessage } from "types/enums";

export default interface ResponseDto { //백엔드에서 응답받은 데이터를 가져와서 프론트엔드에서 사용할 수 있도록 정의
    /*백엔드에서 응답받은 메시지와 코드가 ResponseCode와 
    ResponseMessage 열거형에 맞춰지고, 이를 ResponseDto 인터페이스에 매칭하여 프론트엔드에서 사용할 수 있도록 정의 */

    code : ResponseCode; //열거형 타입으로 지정
    message : ResponseMessage;
}