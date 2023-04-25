import React from "react";

/* 
리덕스로 상태 관리하기

리덕스란? - 자바스크립트를 위한 상태 관리 프레임워크. 
- 컴포넌트 코드로부터 상태 관리 코드를 분리할 수 있다.
- 서버 렌더링 시 데이터 전달이 간편하다. 
- 로컬 스토리지에 데이터를 저장하고 불러오는 코드를 쉽게 작성할 수 있다. 
- 같은 상태값을 다수의 컴포넌트에서 필요로 할 때 좋다.
- 부모 컴포넌트에서 깊은 곳에 있는 자식 컴포넌트에 상태값을 전달할 때 좋다.
- 알림창과 같은 전역 컴포넌트의 상태값을 관리할 때 좋다.
- 페이지가 전환되어도 데이터는 살아 있어야 할 때 좋다.

*/
import tw from "twin.macro";

export default function SampleCode() {
  return (
    <div tw="bg-pink-300 p-[15px]">
      <h1>리액트 실전 활용법</h1>
      <ul tw="grid grid-cols-4 gap-4">
        <li tw='bg-yellow-200 h-[200px] border border-solid border-violet-700'>아이템1</li>
        <li tw='bg-yellow-200 h-[200px] border border-solid border-violet-700'>아이템1</li>
        <li tw='bg-yellow-200 h-[200px] border border-solid border-violet-700'>아이템1</li>
        <li tw='bg-yellow-200 h-[200px] border border-solid border-violet-700'>아이템1</li>
      </ul>
    </div>
  );
}
