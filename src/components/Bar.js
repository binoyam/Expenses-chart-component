import React from "react";

function Bar({ d, data }) {
  console.log(data);

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
    console.log(maxAmount);
    return maxAmount;
  };

  const maxAmount = findMaxAmount();

  return (
    <div className="data">
      <span className="amount">$ {d.amount}</span>
      <div
        className={d.amount === maxAmount ? "bar max" : "bar"}
        style={barStyle}
      ></div>
      <p className="day">{d.day}</p>
    </div>
  );
}

export default Bar;
