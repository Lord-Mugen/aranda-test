import Card from "./Card";

const CardSlider = () => {
  return (
    <>
      <section className="c-cardSlider">
        <h2 className="c-cardSlider__title">Nuevas Recetas</h2>
        <div className="c-cardSlider__container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi officiis
        incidunt nobis quos, et fugiat, ut iusto porro quaerat dolorum hic
        officia itaque. Harum a tempore architecto illum minus accusamus tenetur
        aspernatur, illo explicabo, quas iste fuga vitae natus molestiae numquam
        nostrum deleniti corporis, hic veniam cum magnam cupiditate. Vero omnis
        aut alias voluptas culpa recusandae laborum perferendis non ad aperiam
        possimus, a nam iure, rerum excepturi officia doloribus cum saepe rem
        quas similique sunt ipsam? Voluptatibus corporis porro, nulla veritatis
        autem nam aliquam soluta deleniti, dignissimos laborum asperiores
        aspernatur repellendus? Nobis fuga, tenetur voluptates vel nam sint ut
        asperiores.
      </p>
    </>
  );
};

export default CardSlider;
