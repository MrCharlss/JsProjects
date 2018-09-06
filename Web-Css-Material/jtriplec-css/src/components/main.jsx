import React, { Component } from "react";
import QueHacemos from "./Main/QueHacemos";
import ImpulsaBanner from "./Main/impulsaBanner";
import Resultados from "./Main/seccion-banner";
import Etapas from "./Main/etapasBanner";
import Porque from "./Main/porqueBanner";

class MainSection extends Component {
  state = {};
  render() {
    return (
      <fragment>
        <QueHacemos />
        <ImpulsaBanner />
        <Resultados />
        <Etapas />
        <Porque />
      </fragment>
    );
  }
}

export default MainSection;
