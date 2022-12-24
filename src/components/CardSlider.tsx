import { Context } from "../context/Context";
import { useContext } from "react";
import Card from "./Card";
import { RecipeContexType } from "../context/recipeTypes";

const CardSlider = () => {
  const { recetas } = useContext(Context) as RecipeContexType;

  return (
    <section className="c-cardSlider">
      <h2 className="c-cardSlider__title">Nuevas Recetas</h2>
      <div className="c-cardSlider__container">
        {recetas.map((recip) => (
          <Card
            key={recip.id}
            img={recip.img}
            name={recip.name}
            subName={recip.subName}
            portion={recip.portion}
            time={recip.time}
            difficulty={recip.difficulty}
            ranking={recip.ranking}
          />
        ))}
      </div>
    </section>
  );
};

export default CardSlider;
