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
      <section className="chart"></section>
      <section className="bottom"></section>

      </div>
     
    </main>
  );
}

export default App;
