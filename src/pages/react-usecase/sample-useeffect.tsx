import React, { useState, useEffect } from "react";
import "twin.macro";
import { styled } from "twin.macro";

/* 
useEffect : 부수 효과 처리하기
- 함수 실행 시 함수 외부의 상태를 변경하는 연산을 부수 효과라고 부른다.
- 특별한 이유가 없다면 모든 부수 효과는 useEffect 훅에서 처리하는 게 좋다.
예) API를 호출하는 것과 이벤트 처리 함수를 등록하고 해제하는 것 등

*/

export default function SampleUseCasesPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `업데이트 횟수: ${count}`;
  }, []);

  console.log(count);
  return (
    <div>
      <p>{`업데이트 횟수 : ${count}`}</p>
      <button
        tw="border border-solid border-violet-600 p-[5px] text-violet-700 bg-yellow-400"
        onClick={() => {
          console.log("클릭");
          setCount(() => count + 1);
        }}
      >
        증가
      </button>
      <button
        tw="border border-solid border-violet-600 p-[5px] text-violet-700 bg-yellow-400"
        onClick={() => {
          console.log("클릭");
          setCount(0);
        }}
      >
        초기화
      </button>
    </div>
  );
}
