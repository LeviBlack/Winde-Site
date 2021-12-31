import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainSection from "./components/MainSection";
import Home from "./components/Pages/HomePage/Home";
import LogIn from "./components/Pages/LogIn/LogIn";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/Log-In" element={<LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
