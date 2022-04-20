import React from "react";
import Logo from "../images/earth.png";

function Nav() {
  return (
    <div className="navbar">
      <img className="logo" src={Logo}></img>
      <h1>my travel journal</h1>
    </div>
  );
}

export default Nav;
