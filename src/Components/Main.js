import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Project from "../pages/Project";
import Tools from "../pages/Tools";
import Home from "../pages/Home";

function Main() {
  return (
      <>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/project/" element={<Project />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/contact" element={<Contact />} />
      </Routes>


      </>

  );
}

export default Main;
