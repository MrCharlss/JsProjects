import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          {`${this.props.countCounters}`}
        </a>
      </nav>
    );
  }
}

export default NavBar;
