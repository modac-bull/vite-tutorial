import React from "react";
import "./App.css";

import tw, { styled, css, theme } from "twin.macro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import {
  SampleUseCasesPage,
  SampleUseCasesPage2,
  SampleUseReducer,
} from "@pages/react-usecase";
import TempNavigation from "@/components/Navigation/TempNavigation";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
