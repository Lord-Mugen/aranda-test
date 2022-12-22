//icons
const recipeIcons = require.context("../assets/icons", true);

const Categories = () => {
  return (
    <ul className="c-categories">
      <li className="c-categories__item">
        <a href="/" className="c-categories__link">
          <img src={recipeIcons("./vegetarian.svg")} alt="vegetarian" />
          Vegetarian
        </a>
      </li>
      <li className="c-categories__item">
        <a href="/" className="c-categories__link">
          <img src={recipeIcons("./main.svg")} alt="principales" />
          Principales
        </a>
      </li>
      <li className="c-categories__item">
        <a href="/" className="c-categories__link">
          <img src={recipeIcons("./cake.svg")} alt="cake" />
          Tortas
        </a>
      </li>
      <li className="c-categories__item">
        <a href="/" className="c-categories__link">
          <img src={recipeIcons("./fast-food.svg")} alt="fast-food" />
          Rápida
        </a>
      </li>
      <li className="c-categories__item">
        <a href="/" className="c-categories__link">
          <img src={recipeIcons("./kids.svg")} alt="menu-kids" />
          Menú niños
        </a>
      </li>
      <li className="c-categories__item">
        <a href="/" className="c-categories__link">
          <img src={recipeIcons("./soup.svg")} alt="soup" />
          Sopas
        </a>
      </li>
    </ul>
  );
};

export default Categories;
