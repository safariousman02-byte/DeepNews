import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import FeedPage from "./FeedPage";
import LoginPage from "./LoginPage";

function App() {
  return (
    <Routes>
      {/* When the URL is / , show LandingPage */}
      <Route path="/" element={<LandingPage />} />

      {/* When the URL is /feed , show FeedPage */}
      <Route path="/feed" element={<FeedPage />} />

      {/* When the URL is /login , show LoginPage */}
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
