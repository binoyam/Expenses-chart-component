import React, { useState } from "react";
import "./bar.css";

function Bar({ d, data }) {
  //   console.log(data);
  //   console.log(d);
  const [isHovered, setIsHovered] = useState(false);

  const barStyle = {
    height: `${d.amount * 3}px`,
  };

  const findMaxAmount = () => {
    let maxAmount = 0;
    data.forEach((d) => {
      if (d.amount > maxAmount) {
        maxAmount = d.amount;
      }
    });
    // console.log(maxAmount);
    return maxAmount;
  };

  const maxAmount = findMaxAmount();

  function handleMouseEnter() {
    setIsHovered(true);
  }
  function handleMouseLeave() {
    setIsHovered(false);
  }
  return (
    <div className="data">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={d.amount === maxAmount ? "bar max" : "bar"}
        style={barStyle}
      >
        {isHovered && <span className="amount">$ {d.amount}</span>}
      </div>

      <p className="day">{d.day}</p>
    </div>
  );
}
export default Bar;
