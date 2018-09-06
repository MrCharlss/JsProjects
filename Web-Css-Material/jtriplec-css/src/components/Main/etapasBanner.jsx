import React from "react";
const Etapas = props => {
  return (
    <section className="banner-etapas">
      <div id="etapas" className="inner-banner">
        <div className="row-desc">
          <p>
            Atraemos a tus compradores potenciales, dándoles mensajes
            atractivos, en los momentos más oportunos, provocamos que quieran
            saber más de tu negocio.
          </p>
          <h1>Provocamos que hagan contacto contigo.</h1>
        </div>
        <div className="row-cards">
          <div className="card">
            <div className="card-container">
              <h1>Publicidad Digital</h1>
            </div>
            <div className="card-container-text">
              <p>
                Seleccionamos las plataformas y canales más adecuados para
                potenciar tu marca
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-container">
              <h1>Estrategia de contenidos</h1>
            </div>
            <div className="card-container-text">
              <p>
                Diseñamos contenido que conecta con tus compradores potenciales.
                los provocamos para que hagan contacto
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-container">
              <h1>Estrategia de campaña</h1>
            </div>
            <div className="card-container-text">
              <p>
                Diseñamos tu campaña en función a tus compradores potenciales y
                sus hábitos de compra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Etapas;
