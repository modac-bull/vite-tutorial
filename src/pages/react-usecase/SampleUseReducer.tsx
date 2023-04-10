import React, { useReducer } from "react";

interface PersonInfo {
  age: number;
}

type ActionType = {
  type: "incremented_age";
};

function reducer(state: PersonInfo, action: ActionType) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown action.");
}

export default function SampleUseReducer() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
