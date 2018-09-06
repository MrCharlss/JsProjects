import React, { Component } from "react";
import Herocomponent from "./Herocomponent";

class Navigationcomponent extends Component {
  state = {};
  render() {
    return (
      <fragment>
        <nav>
          <ul>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
          <div>
            <a href="#">
              <img id="NavLogo" src="logoNav.png" alt="" />
            </a>
          </div>
          <ul>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Espacio</a>
            </li>
          </ul>
        </nav>
      </fragment>
    );
  }
}

export default Navigationcomponent;
