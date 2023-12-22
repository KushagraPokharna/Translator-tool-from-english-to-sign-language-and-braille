import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Braille from "./Braille.js";
import Signlan from "./Signlan.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="braille" element={<Braille />} />
          <Route path="sign" element={<Signlan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
