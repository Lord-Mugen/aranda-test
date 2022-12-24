import Card from "./Card";
import { recipes } from "../helpers/recipes";

const CardSlider = () => {
  return (
    <section className="c-cardSlider">
      <h2 className="c-cardSlider__title">Nuevas Recetas</h2>
      <div className="c-cardSlider__container">
        {recipes.map((recip) => (
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
