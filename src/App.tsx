import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import tw, { styled, css, theme } from "twin.macro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TempNavigation from "./components/Navigation/TempNavigation";

function App() {
  return (
    <>
      <TempNavigation></TempNavigation>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
