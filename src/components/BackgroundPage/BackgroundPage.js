import React from "react";
import { NavLink } from "react-router-dom";
import "./BackgroundPage.css";

const backgroundPage = () => {
  return (
    <div className="background">
      <div className="bg-content">
        <h1>Hello, I'm Patrick</h1>
        <p>Front-End-Developer</p>
        <NavLink to="/contact">
          <button>Contact me</button>
        </NavLink>
      </div>
    </div>
  );
};

export default backgroundPage;
