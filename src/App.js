import {Link,Routes, Route} from "react-router-dom";
import About from './pages/About'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Project from './pages/Project'
import Tools from './pages/Tools'
import Footer from "./footer";
import Home from "./pages/Home";
function App() {
  return (
      <>
     
      
      <header>
            <h1><Link to="/">Blasco</Link></h1>
            <ul>
                  
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/education">Education</Link></li>
                  <li><Link to="/experience">Experience</Link></li>
                  <li><Link to="/project">Project</Link></li>
                  <li><Link to="/tools">Tools</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  
            </ul>
      </header>
     


      
      <Routes>
            <Route path="/" element={<Home />} />


            <Route path="/about" element={<About/>}/>
            <Route path="/education" element={<Education/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/tools" element={<Tools/>}/>
            <Route path="/contact" element={<Contact/>}/>
      
            
      </Routes>
       

      <Footer />
      </>

  );
}

export default App;
