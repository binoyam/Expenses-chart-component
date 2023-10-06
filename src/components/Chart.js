import React from "react";

function Chart({ data }) {
  return (
    <div className="chart">
      {data.map((data, index) => (
        <div key={index} className="data">
          <span className="amount">{data.amount}</span>
          <span className="bar"></span>
          <p className="day">{data.day}</p>
        </div>
      ))}
    </div>
  );
}

export default Chart;
