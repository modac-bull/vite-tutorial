
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../../public/vite.svg";

import tw, { styled, css, theme } from "twin.macro";

export default function Home() {
  const [count, setCount] = useState(0);



  return (
    <div className="App">
      <div tw="flex items-center justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>{`count is ${count}`}</p>
        <button
          tw="border border-solid border-gray-600 p-[10px] bg-amber-400"
          onClick={() => setCount((count) => count + 1)}
        >
          Add Count
        </button>
        <button
          tw="border border-solid border-gray-600 p-[10px] bg-amber-400"
          onClick={() => setCount(() => 0)}
        >
          Reset Count
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
