import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { Fade } from "react-awesome-reveal";
function Header() {
  const [display, setDisplay] = useState(false);

  const displayMenu = () => {
    setDisplay(!display);
    console.log(display);
  };

  return (
    <>
      <header>
        <h1>
          <Link to="/">Blasco</Link>
        </h1>
                  
        <ul>
        <Fade direction="up" cascade duration={1000}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/tools">Tools</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          </Fade>
        </ul>

        <MenuIcon className="hamburat" onClick={displayMenu} />
      </header>

      {/* menubar */}

      <aside className={`menu${!display ? "up" : ""}`}>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/tools">Tools</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Header;
