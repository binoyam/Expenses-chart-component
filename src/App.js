import React from "react";
import "./index.css";
import Data from "./data.json";
import Header from "./components/header/Header";
import Expense from "./components/expense/Expense";

function App() {
  const data = Data;

  return (
    <main className="app">
      <div className="hero">
        <Header />
        <Expense data={data} />
      </div>
    </main>
  );
}

export default App;
