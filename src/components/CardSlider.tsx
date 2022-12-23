import Card from "./Card";

const CardSlider = () => {
  return (
    <section className="c-cardSlider">
      <h2 className="c-cardSlider__title">Nuevas Recetas</h2>
      <div className="c-cardSlider__container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default CardSlider;
