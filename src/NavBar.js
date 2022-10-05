import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ href, text }) {
  return (
    <div className="header-wrapper">
      <header> ZuruKenya</header>
      <NavLink to={href} className="header-link">
        {text}
      </NavLink>
    </div>
  );
}

export default NavBar;
