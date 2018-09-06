import React from "react";
const Porque = props => {
  return (
    <section id="Porque" className="banner">
      <div id="Porque" className="inner-banner">
        <div className="row-porque">
          <h1>¿Porqué Nosotros?</h1>
          <p id="porque-tex">
            Somos apasionados por la creatividad, {""}
            la innovación y por empujar el límite de cómo hacer marketing.{" "}
            <br />
            Nos encanta salir de lo convencional,
            {""} llamamos la atención con trabajo e ingenio. <br />
            Gracias a nuestra experiencia en Marketing tradicional, digital,
            comunicación y desarrollo de tecnología, <br />
            creamos estrategias que dan justo en el blanco. <br />
            Hacemos creatividad con estrategia para llegar al resultado más
            importante:{" "}
          </p>
          <button className="btn-cta">Impulsar tu negocio</button>
        </div>
      </div>
      <div className="row-logo">
        <div className="col-planeta">
          <img id="logoFinal" src="logoNav.png" />
        </div>
        <div className="col">
          <img id="logoLetra" src="recurso6.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Porque;
