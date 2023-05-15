import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"
const Nav = () => {
  return (
    <header>
      <div className="logo-box"> Videogames</div>
      <nav>
        <ul>
          <li>
            <Link className="font-3">Landing</Link>
            <Link className="font-3">Create</Link>
            <Link>About</Link>
          </li>
        </ul>
      </nav>
      <nav className="logo-box">
        <ul >
          <li>
            <Link>github</Link>
            <Link>linkedin</Link>
            <Link>ingresar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
