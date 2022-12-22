import vegetarian from "../assets/icons/vegetarian.svg";
import main from "../assets/icons/main.svg";
// import cake from "../assets/icons/cake.svg";
// import vegetarian from "../assets/icons/vegetarian.svg";
// import vegetarian from "../assets/icons/vegetarian.svg";
// import vegetarian from "../assets/icons/vegetarian.svg";
// import vegetarian from "../assets/icons/vegetarian.svg";

const recipeIcons = require.context("../assets/icons", true);

const Categories = () => {
  return (
    <ul className="c-categories">
      <li className="c-categories__item">
        <a href="" className="c-categories__link">
          <img src={vegetarian} alt="vegetarian" />
          Vegetarian
        </a>
      </li>
      <li className="c-categories__item">
        <a href="" className="c-categories__link">
          <img src={main} alt="main" />
          Principales
        </a>
      </li>
      <li className="c-categories__item">
        <a href="" className="c-categories__link"></a>
      </li>
      <li className="c-categories__item">
        <a href="" className="c-categories__link"></a>
      </li>
      <li className="c-categories__item">
        <a href="" className="c-categories__link"></a>
      </li>
      <li className="c-categories__item">
        <a href="" className="c-categories__link"></a>
      </li>
    </ul>
  );
};

export default Categories;
