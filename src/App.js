import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DetailPage from "./pages/DetailPage";
import Checkout from "./pages/Checkout";
import "./assets/scss/style.scss";
import Example from "pages/Example";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/properties/:id" element={<DetailPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
