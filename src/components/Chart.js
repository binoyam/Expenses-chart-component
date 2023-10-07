import React from "react";
import Bar from "./Bar";

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
