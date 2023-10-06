import React from "react";

function Footer({ data }) {

  const totalAmount = () => {
    let sum = 0;
    data.forEach((data) => {
      sum += data.amount;
    });
    return sum;
  };

  const total = totalAmount();

  return (
    <div className="footer">
      <p className="txt">Total this month</p>

      <div className="total-div">

        <h1 className="total">${total}</h1>
        
        <div className="note">
          <p className="status">+2.4%</p>
          <p className="txt">from last month</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
