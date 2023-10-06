import React from "react";
import "./index.css";
import Data from "./components/data.json";
import Header from "./components/Header";
import Expense from "./components/Expense";
function App() {
  const data = Data;

  return (
    <main className="app">
      <div className="hero">
        <Header />
        <Expense />
      </div>
    </main>
  );
}

export default App;
