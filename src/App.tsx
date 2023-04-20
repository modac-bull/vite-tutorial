import TempNavigation from "@/components/Navigation/TempNavigation";
import Home from "@pages/Home";
import {
  SampleCode,
  SampleUseCasesPage,
  SampleUseCasesPage2,
  SampleUseReducer,
  SampleUseReducerThree,
  SampleUseReducerTwo,
} from "@pages/react-usecase";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import tw, { css, styled, theme } from "twin.macro";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <TempNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/react-usecase/sample1"
            element={<SampleUseCasesPage />}
          />
          <Route
            path="/react-usecase/sample2"
            element={<SampleUseCasesPage2 />}
          />
          <Route path="/react-usecase/sample3" element={<SampleUseReducer />} />
          <Route
            path="/react-usecase/sample4"
            element={<SampleUseReducerTwo />}
          />
          <Route
            path="/react-usecase/sample5"
            element={<SampleUseReducerThree />}
          />
          <Route path="/react-usecase/sample6" element={<SampleCode />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
