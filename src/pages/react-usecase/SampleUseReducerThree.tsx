import React, { useReducer } from "react";

enum ReducerType {
  SET_NAME = "SET_NAME",
  SET_AGE = "SET_AGE",
}

interface PersonInfo {
  name: string;
  age: number;
}

interface SetNameAction {
  type: ReducerType.SET_NAME;
  payload: {
    name: string;
  };
}
interface SetAgeAction {
  type: ReducerType.SET_AGE;
  payload: {
    age: number;
  };
}

type setAction = SetNameAction | SetAgeAction;

const INTIAL_STATE: PersonInfo = { name: "age", age: 2 };

function reducer(state: PersonInfo, action: setAction) {
  switch (action.type) {
    case ReducerType.SET_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    case ReducerType.SET_AGE:
      return {
        ...state,
        age: action.payload.age,
      };
    default:
      return state;
  }
}

export default function SampleUseReducerThree() {
  const [state, dispatch] = useReducer(reducer, INTIAL_STATE);
  return (
    <div>
      <p>{`name is ${state.name}`} </p>
      <p>{`age is ${state.age}`} </p>
      <input
        type="text"
        value={state.name}
        onChange={(e) => {
          console.log(e.currentTarget.value);
          dispatch({
            type: ReducerType.SET_NAME,
            payload: { name: e.currentTarget.value },
          });
        }}
      />
      <input type="number" />
    </div>
  );
}
