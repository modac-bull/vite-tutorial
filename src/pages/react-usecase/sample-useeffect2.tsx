import React, { useState, useEffect } from "react";
import "twin.macro";
import { styled } from "twin.macro";

/* 
useEffect : 부수 효과 처리하기
- 함수 실행 시 함수 외부의 상태를 변경하는 연산을 부수 효과라고 부른다.
- 특별한 이유가 없다면 모든 부수 효과는 useEffect 훅에서 처리하는 게 좋다.
예) API를 호출하는 것과 이벤트 처리 함수를 등록하고 해제하는 것 등

*/

async function getFilmData(id: number) {
  const res = fetch(`https://swapi.dev/api/people/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => error);
  return res;
}

export default function SampleUseCasesPage2() {
  const [data, setData] = useState(null);
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getFilmData(userId).then((data) => setUser(data));
  }, [userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof e.target.value !== "number") return;
    setUserId(e.target.value);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("호출");
  };
  return (
    <>
      <div tw="flex w-[550px] mx-auto border border-amber-200 gap-[20px] items-center justify-center">
        <p>숫자 입력 : </p>
        <form onSubmit={submitHandler}>
          <input
            type="number"
            tw="bg-pink-200/25"
            id="user-id"
            name="user-id"
            onChange={handleChange}
          ></input>
          <button type="submit">123</button>
        </form>
      </div>
    </>
  );
}
