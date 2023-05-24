import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'animate.css';
import './App.css'
import Details from "./pages/details";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Projects from "./pages/file";
import Games from "./pages/games";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/details" element={<Details />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}
