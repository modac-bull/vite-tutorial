import React, { useState, useEffect } from "react";
import "twin.macro";

/* 
useEffect : 부수 효과 처리하기
- 

*/

export default function SampleUseCasesPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `업데이트 횟수: ${count}`;
  }, []);
  

  console.log(count)
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
