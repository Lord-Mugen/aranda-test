import sponsor from "../assets/sponsor.png";

const Footer = () => {
  return (
    <footer className="c-footer">
      <h3 className="c-footer__text">Con el Patrocinio de</h3>
      <img className="c-footer__img" src={sponsor} alt="sponsor-footer" />
    </footer>
  );
};

export default Footer;
