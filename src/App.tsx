import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Categories from "./containers/Categories";

function App() {
  return (
    <div className="c-container">
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
