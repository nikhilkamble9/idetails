import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <div className="Navbar">
      <nav className="header">
        <Link to="App" smooth={true} duration={1000}>
          <h3>iDetails</h3>
        </Link>
      </nav>
      <div className="list">
        <ul className="features">
          <li className="navbarlist">
            <Link to="firstsection" smooth={true} duration={1000}>
              Install VSCode
            </Link>
          </li>
          <li className="navbarlist">
            <Link to="InstallGit" smooth={true} duration={1000}>
              Install Git
            </Link>
          </li>
          <li className="navbarlist">
            <Link to="InstallReact" smooth={true} duration={1000}>
              Install React App
            </Link>
          </li>
          <li className="navbarlist">
            <Link to="NpmNode" smooth={true} duration={1000}>
              Install npm | NodeJS
            </Link>
          </li>
          <li className="navbarlist">
            <Link to="About" smooth={true} duration={1000}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
