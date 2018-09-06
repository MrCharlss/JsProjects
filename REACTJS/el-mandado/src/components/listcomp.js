import React, { Component } from "react";

const ListComp = props => {
  return (
    <div className="container">
      <div className="col-sm-6">
        <li>Este es un componente {props.nombre}</li>

        <button
          style={{ margin: "5px" }}
          className="btn btn-primary"
          onClick={props.handleClick}
        >
          Click here{" "}
          <span
            className="badge badge-light"
            style={{ marginLeft: "5px", fontSize: "20px" }}
          >
            {props.counter}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ListComp;
