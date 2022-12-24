const icon = require.context("../assets/icons", true);

type props = {
  img: string;
  name: string;
  subName: string;
  portion: string;
  time: string;
  difficulty: string;
};

const Card: React.FC<props> = ({
  img,
  name,
  subName,
  portion,
  time,
  difficulty,
}) => {
  return (
    <div className="c-card">
      <img className="c-card__img" src={img} alt="Food img" />
      <div className="c-card__ranking">
        <p className="c-card__name">
          {name} <span>{subName}</span>
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
          <p className="c-card__recipe-data">{portion}</p>
        </div>
        <div className="c-card__info">
          <img
            className="c-card__recipe-icon"
            src={icon("./time.svg")}
            alt="food time"
          />
          <p className="c-card__recipe-title">Tiempo de preparación</p>
          <p className="c-card__recipe-data">{time}</p>
        </div>
        <div className="c-card__info">
          <img
            className="c-card__recipe-icon"
            src={icon("./chef.svg")}
            alt="chef hat"
          />
          <p className="c-card__recipe-title">Dificultad</p>
          <p className="c-card__recipe-data">{difficulty}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
