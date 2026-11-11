import LandingPage from "./LandingPage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
