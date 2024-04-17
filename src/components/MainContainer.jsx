import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Red from "./Red";
import Blue from "./Blue";
import Color from "./Color";

export default function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/home" element={<Home />} />

        <Route path="/footer/:color" element={<Color />} />
      </Routes>
    </div>
  );
}
