//icons
const recipeIcons = require.context("../assets/icons", true);

const Categories = () => {
  return (
    <ul className="c-categories">
      <li className="c-categories__item">
        <img src={recipeIcons("./vegetarian.svg")} alt="vegetarian" />
        <a href="/" className="c-categories__link">
          Vegetarian
        </a>
      </li>
      <li className="c-categories__item">
        <img src={recipeIcons("./main.svg")} alt="principales" />
        <a href="/" className="c-categories__link">
          Principales
        </a>
      </li>
      <li className="c-categories__item">
        <img src={recipeIcons("./cake.svg")} alt="cake" />
        <a href="/" className="c-categories__link">
          Tortas
        </a>
      </li>
      <li className="c-categories__item">
        <img src={recipeIcons("./fast-food.svg")} alt="fast-food" />
        <a href="/" className="c-categories__link">
          Rápida
        </a>
      </li>
      <li className="c-categories__item">
        <img src={recipeIcons("./kids.svg")} alt="menu-kids" />
        <a href="/" className="c-categories__link">
          Menú niños
        </a>
      </li>
      <li className="c-categories__item">
        <img src={recipeIcons("./soup.svg")} alt="soup" />
        <a href="/" className="c-categories__link">
          Sopas
        </a>
      </li>
    </ul>
  );
};

export default Categories;
