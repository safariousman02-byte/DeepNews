import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import FeedPage from "./FeedPage";
import LoginPage from "./LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/feed" element={<FeedPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
