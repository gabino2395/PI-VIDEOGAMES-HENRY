import React from "react";
//css
import "./Nav.css";
//router
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <header>
        <Link to={"/heroSection"} className="logo-box">
          {" "}
          <span className="material-symbols-outlined logo">
            keyboard_double_arrow_up
          </span>
        </Link>

        <nav>
          <ul>
            <li>
              <Link to={"/home"} className="font-3 navs-link">
                Games
              </Link>
              <Link to={"/createGame"} className="font-3 navs-link">
                Create
              </Link>
              <Link className="font-3 navs-link">About</Link>
            </li>
          </ul>
        </nav>
        <nav className="logo-box">
          <ul>
            <li>
              <Link to={"/"} className="navs-link">
                <span className="material-symbols-outlined">person</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
