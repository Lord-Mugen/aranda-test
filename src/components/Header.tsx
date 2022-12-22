import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = (): JSX.Element => {
  return (
    <header className="c-main-menu">
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
