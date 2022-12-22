import React from "react";
import "./App.css";
import Header from "./components/Header";
import Categories from "./containers/Categories";

function App() {
  return (
    <div className="c-container">
      <Header />
      <Categories />
    </div>
  );
}

export default App;
