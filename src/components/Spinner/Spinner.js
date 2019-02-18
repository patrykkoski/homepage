import React from "react";
import "./Spinner.css";
const spinner = () => {
  return (
    <div className="spinner-wrapper">
      <img src={require("../../dist/img/logo.png")} alt="Spinner" />
    </div>
  );
};

export default spinner;
