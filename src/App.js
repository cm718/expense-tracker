import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import { incomeExpenses } from './components/incomeExpenses'

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
      </div>
      <incomeExpenses />
    </div>
  );
}

