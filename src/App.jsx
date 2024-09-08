import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import "./index.css";
import "react-resume/src/components/Pixel/PixelBorders.css";
import "react-resume/src/components/Pixel/PixelCorners.css";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;