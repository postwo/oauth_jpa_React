### react 생성
1. npx create-react-app [생성할 이름] --template typescript
ex) npx create-react-app front --template typescript 타입스크림을 사용할거면 추가

2. 패키지 추가
npm i react-router-dom react-cookie axios


### tsconfig.json 에 "baseUrl" : "./src" 을 추가하면 경로 작성할때 매우 편해진다 

// 예시: baseUrl이 설정되지 않은 경우
import myModule from '../../../myModule';

// 예시: baseUrl이 './src'로 설정된 경우
import myModule from 'myModule'


### 리액트 기본틀  rfc
import React from "react";

export default function index() {
return (
<div>index</div>
)
}


### css 모음 
1. display: HTML 요소의 배치 방식을 결정

- block: 요소를 블록 박스로 표시하여, 전체 너비를 차지하고 줄바꿈을 합니다.

- inline: 요소를 인라인 박스로 표시하여, 내용의 너비만큼만 차지하고 줄바꿈을 하지 않습니다.

- flex: 요소를 플렉스 컨테이너로 설정하여, 자식 요소들을 플렉스 박스 레이아웃으로 배치합니다.

- grid: 요소를 그리드 컨테이너로 설정하여, 자식 요소들을 그리드 레이아웃으로 배치합니다.


2. flex-direction: 플렉스 컨테이너 내의 자식 요소들이 어떤 방향으로 배치될지를 결정

- row: 자식 요소들을 가로 방향으로 배치합니다 (기본값).

- column: 자식 요소들을 세로 방향으로 배치합니다.

- row-reverse: 자식 요소들을 가로 방향으로, 역순으로 배치합니다.

- column-reverse: 자식 요소들을 세로 방향으로, 역순으로 배치합니다.


3. gap: 플렉스 또는 그리드 컨테이너 내의 자식 요소들 사이의 간격을 설정

- gap: 8px;: 자식 요소들 사이에 8픽셀의 간격을 설정합니다.

- row-gap: 8px;: 행(가로) 사이에 8픽셀의 간격을 설정합니다.

- column-gap: 8px;: 열(세로) 사이에 8픽셀의 간격을 설정합니다.

