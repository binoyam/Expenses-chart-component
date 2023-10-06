import React from "react";
import Logo from "../images/logo.svg";

function Header() {
  return (
    <section className="top">
      <div className="text">
        <h3>My balance</h3>
        <p>$921.48</p>
      </div>
      <div className="logo-div">
        <img src={Logo} alt="Logo" />
      </div>
    </section>
  );
}

export default Header;
