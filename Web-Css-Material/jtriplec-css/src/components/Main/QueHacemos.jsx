import React, { Component } from "react";

const QueHacemos = props => {
  return (
    <div className="seccion-quehacemos">
      <div className="section-container">
        <div className="col-texto">
          <h1>¿Que Hacemos?</h1>
          <p>
            Somos una agencia de Creatividad Digital Full Service, vamos desde
            la planeación estratégica hasta la puesta en punto y operación.
            <br />
            Nuestras campañas logran impulsar de forma rentable tus esfuerzos de
            marketing digital, creamos estrategias digitales que generan ventas,
            mientras contamos tu historia y compartimos la esencia de tu marca.{" "}
            <h2>
              Nos enfocamos en hacer que tus clientes potenciales sepan de ti y
              hagan contacto.
            </h2>
          </p>
        </div>
        <div className="col-img">
          <img id="img-quehacemos" src="logoNav.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default QueHacemos;
