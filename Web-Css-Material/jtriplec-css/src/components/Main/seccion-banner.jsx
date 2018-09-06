import React from "react";
const Resultados = props => {
  return (
    <section className="banner-resultados">
      <div id="resultados" className="inner-banner-resultados">
        <div className="row-titulo">
          <h1>Obtén los resultados que estás buscando:</h1>
        </div>
        <div className="icon-row">
          <div className="icon-card">
            <img src="icon-1.png" alt="" />
            <p>Posicionamiento de marca</p>
          </div>
          <div className="icon-card">
            <img src="icon-2.png" alt="" />
            <p>Adquisición de nuevos usuarios</p>
          </div>
          <div className="icon-card">
            <img src="icon-3.png" alt="" />
            <p>Clientes potenciales</p>
          </div>
          <div className="icon-card">
            <img src="icon-4.png" alt="" />
            <p>ROI positivo en tu estrategia de marketing digital</p>
          </div>
          <div className="icon-card">
            <img src="icon-5.png" alt="" />
            <p>Aumenta los contactos directos para ventas</p>
          </div>
          <div className="icon-card">
            <img src="icon-5.png" alt="" />
            <p>Contenido creativo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resultados;
