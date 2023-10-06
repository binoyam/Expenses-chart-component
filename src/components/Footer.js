import React from "react";

function Footer() {
  return (
    <div className="footer">
      <p className="this">Total this month</p>
      <div className="total-div">
        <h1>$437.53</h1>
        <div className="note">
          <p className="status">+2.4%</p>
          <p className="this">from last month</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
