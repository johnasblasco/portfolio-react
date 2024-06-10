import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Blasco</Link>
        </h1>
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
      </header>
    </>
  );
}

export default Header;
