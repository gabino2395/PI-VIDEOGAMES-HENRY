import React from "react";
import { Link,NavLink } from "react-router-dom";
import "./Nav.css"
const Nav = () => {
  return (
     <>
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
     {/* <header className="header">
       <div>
         <Link to="/" className="logo">
           Salitre
         </Link>
         <img
           className="imgLogo"
           src="/imgLogo/surfboard.png"
           alt="imagen de logo"
         />
       </div>
       <ul className="header-ul">
         <li className="header-li">
           <NavLink to="/" className="href">
             home
           </NavLink>
         </li>



         <ul className="header-li header-ul">
           <li className="header-li">
             <NavLink to="category/1" className="href">
               surfboards
             </NavLink>
           </li>
           <li className="header-li">
             <NavLink to="category/2" className="href">
               t-shirts
             </NavLink>
           </li>
           <li className="header-li">
             <NavLink to="category/3" className="href">
               shorts
             </NavLink>
           </li>
         </ul>



        
       </ul>
     </header> */}
     {/* <section className="banner"></section> */}
   </>
  );
};

export default Nav;
