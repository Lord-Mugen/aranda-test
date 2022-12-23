// import Ojinjeo from "../assets/Ojingeo-muchim.png";
// import Star from "../assets/icons/star.svg";
// import Heart from "../assets/icons/favorite.svg";

const recipe = require.context("../assets/", true);
const icon = require.context("../assets/icons", true);

const Card = () => {
  return (
    <div className="c-card">
      <div className="c-card__content-img">
        <img
          className="c-card__img"
          src={recipe("./Ojingeo-muchim.png")}
          alt="Food img"
        />
      </div>
      <div className="c-card__ranking">
        <p className="c-card__name">
          Ojingeo <span>muchim</span>
        </p>
        <div className="c-card__footer">
          <span>
            <img className="c-card__icon" src={icon("./star.svg")} alt="star" />
            5.0
          </span>
          <img
            className="c-card__icon"
            src={icon("./favorite.svg")}
            alt="heart"
          />
        </div>
      </div>

      <div className="c-card__recipe">
        <div className="c-card__info">
          <img
            className="c-card__recipe-icon"
            src={icon("./portion.svg")}
            alt="food portion"
          />
          <p className="c-card__recipe-title">Tamaño de la porcion</p>
          <p className="c-card__recipe-data">4 raciones</p>
        </div>
        <div className="c-card__info">
          <img
            className="c-card__recipe-icon"
            src={icon("./time.svg")}
            alt="food time"
          />
          <p className="c-card__recipe-title">Tiempo de preparación</p>
          <p className="c-card__recipe-data">10 minutos</p>
        </div>
        <div className="c-card__info">
          <img
            className="c-card__recipe-icon"
            src={icon("./chef.svg")}
            alt="chef hat"
          />
          <p className="c-card__recipe-title">Dificultad</p>
          <p className="c-card__recipe-data">fácil</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
