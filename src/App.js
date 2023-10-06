import React from "react";
import "./index.css";
import Data from "./components/data.json";
import Header from "./components/Header";
function App() {
  const data = Data;

  return (
    <main className="app">
      <div className="hero">
        <Header />
        <section className="expense">
          <h2>Spending - Last & days</h2>
          <div className="chart">
            <div className="mon">mon</div>
            <div className="tue">tue</div>
            <div className="wed">wed</div>
            <div className="thu">thu</div>
            <div className="fri">fri</div>
            <div className="sat">sat</div>
            <div className="sun">sun</div>
          </div>
          <div className="border"></div>
          <div className="footer">
            <p className="this">Total this month</p>
            <div className="total-div">
              <div className="total-amount">
                <h1>$437.53</h1>
              </div>
              <div className="note">
                <p className="status">+2.4%</p>
                <p className="this">from last month</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
