import React from "react";
import Chart from "./Chart";
import Footer from "./Footer";

function Expense({ data }) {
  
  return (
    <section className="expense">
      <h1 className="spending">Spending - Last 7 days</h1>
      <Chart data={data} />
      <div className="border"></div>
      <Footer data={data} />
    </section>
  );
}

export default Expense;
