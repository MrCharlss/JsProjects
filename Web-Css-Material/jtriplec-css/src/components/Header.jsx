import React, { Component } from "react";
import Navigationcomponent from "./Header/Navigationcomponent";
import Herocomponent from "./Header/Herocomponent";

class HeaderSection extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navigationcomponent />
        <Herocomponent />
      </div>
    );
  }
}

export default HeaderSection;
