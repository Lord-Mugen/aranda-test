import home from "../assets/icons/home.svg";

const Navbar = () => {
  return (
    <>
      <nav className="c-navbar">
        <ul className="c-navbar__list-container">
          <li className="c-navbar__brand ">
            <a href="#home" className="c-navbar__brand-link">
              Recipe<span>App</span>
            </a>
          </li>
          <li className="c-navbar__list-item is-active">
            <a href="#home" className="c-navbar__list-link">
              Home
            </a>
          </li>
          <li className="c-navbar__list-item">
            <a href="#vegetarianos" className="c-navbar__list-link">
              Vegetarianos
            </a>
          </li>
          <li className="c-navbar__list-item">
            <a href="#platosPrincipales" className="c-navbar__list-link">
              Platos Principales
            </a>
          </li>
          <li className="c-navbar__list-item">
            <a href="#tortas" className="c-navbar__list-link">
              Tortas
            </a>
          </li>
          <li className="c-navbar__list-item">
            <a href="#comidaRapida" className="c-navbar__list-link">
              Cómida Rápida
            </a>
          </li>
          <li className="c-navbar__list-item">
            <a href="#menuNinos" className="c-navbar__list-link">
              Menú Niños
            </a>
          </li>
          <li className="c-navbar__list-item">
            <a href="#sopas" className="c-navbar__list-link">
              Sopas
            </a>
          </li>
          <li className="c-navbar__list-item">
            <a href="/" className="c-navbar__mobile-link">
              <img src={home} alt="homeImg" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
