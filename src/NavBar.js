import React from "react";

function NavBar({ href, text }) {
  return (
    <div className="header-wrapper">
      <header> ZuruKenya</header>
      <a href={href} className="header-link">
        {" "}
        {text}
      </a>
    </div>
  );
}

export default NavBar;
