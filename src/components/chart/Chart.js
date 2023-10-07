import React from "react";
import './chart.css'
import Bar from "../bar/Bar";

function Chart({ data }) {
  return (
    <div className="chart">
      {data.map((d, index) => (
        <Bar d={d} data={data} key={index} />
      ))}
    </div>
  );
}

export default Chart;
