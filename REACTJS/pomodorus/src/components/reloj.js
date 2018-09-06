import React, { Component } from "react";

class Reloj extends Component {
  constructor() {
    super();
    this.state = {
      defaultTime: 25,
      cicloLargo: 3,
      cicloCorto: 2
    };
    this.calcularTiempo = this.calcularTiempo.bind(this);
  }
  calcularTiempo() {
    let deadline = Date.parse(new Date()) + this.state.defaultTime * 60 * 1000;
    return deadline;
  }

  calcularDiferenciaTiempo = () => {
    let tiempo = this.calcularTiempo();

    let interval = setInterval(() => this.dataParse(1500000), 1000);
  };

  dataParse = tiempo => {
    let diferencia = tiempo - Date.parse(new Date());
    let minutos = Math.floor((diferencia / 1000 / 60) % 60);
    let segundos = Math.floor((diferencia / 1000) % 60);
    console.log(`${minutos}:${segundos}`);
    return `${minutos}:${segundos}`;
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1> {this.calcularDiferenciaTiempo()} </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Reloj;
