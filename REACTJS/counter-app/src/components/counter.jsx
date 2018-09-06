import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasees()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger sm m-2"
        >
          Borrar
        </button>
      </div>
    );
  }

  addToList(elem) {
    this.state.tags.push(elem);
  }

  getBadgeClasees() {
    let clases = "badge m-2 badge-";
    clases += this.props.counter.value === 0 ? "warning" : "primary";
    return clases;
  }

  formatCount() {
    return this.props.counter.value === 0 ? (
      <h1>Zer0</h1>
    ) : (
      this.props.counter.value
    );
  }
}

export default Counter;
