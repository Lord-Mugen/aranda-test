import "./App.css";
import CardSlider from "./components/CardSlider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Categories from "./containers/Categories";

function App() {
  return (
    <div className="c-container">
      <Header />
      <Categories />
      <CardSlider />
      <Footer />
    </div>
  );
}

export default App;
