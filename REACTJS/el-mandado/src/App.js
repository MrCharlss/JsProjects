import React, { Component } from "react";
import "./App.css";
import "./components/listcomp";
import ListComp from "./components/listcomp";

class App extends Component {
  handleClick() {
    console.log("Clickkkkkkk!");
  }

  render() {
    let nombre = "Carlos";
    this.state = { counter: 0 };
    return (
      <div>
        <div style={{ backgroundColor: "#191a1a" }} className="App">
          <h1 style={{ color: "#DFDBDD" }}> El Mandado de </h1>
        </div>

        <ListComp
          handleClick={this.handleClick}
          nombre={nombre}
          counter={this.state.counter}
        />
      </div>
    );
  }
}

export default App;
