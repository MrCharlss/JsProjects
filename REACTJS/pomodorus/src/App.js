import React, { Component } from "react";
import "./App.css";
import "./components/header";
import Header from "./components/header";
import SelectorDeCiclos from "./components/selectordeciclos";
import Reloj from "./components/reloj";
import Controles from "./components/controles";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <SelectorDeCiclos />
        </div>
        <Reloj />
        <Controles />
      </div>
    );
  }
}

export default App;
