import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import FeedPage from "./FeedPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/feed" element={<FeedPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
