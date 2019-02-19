import React from "react";
import "./Skills.css";

const skills = () => {
  return (
    <div className="skills">
      <div className="changePageScreen">
        <img src={require("../../dist/img/logo.png")} alt="logo" />
        <div className="page-loader" />
      </div>
      <h2>Technologies that I use</h2>
      <div className="skills-wraper">
        <div className="tech-description">
          <img
            src={require("../../dist/img/skills/html.png")}
            width="180"
            height="180"
            alt="html"
          />
          <h3>HTML5</h3>
        </div>
        <div className="tech-description">
          <img
            src={require("../../dist/img/skills/css.png")}
            width="180"
            height="180"
            alt="css"
          />
          <h3>CSS3</h3>
        </div>
        <div className="tech-description">
          <img
            src={require("../../dist/img/skills/js.png")}
            width="180"
            height="180"
            alt="js"
          />
          <h3>JavaScript</h3>
        </div>
        <div className="tech-description">
          <img
            src={require("../../dist/img/skills/react.png")}
            width="180"
            height="180"
            alt="react"
          />
          <h3>ReactJS</h3>
        </div>
        <div className="tech-description">
          <img
            src={require("../../dist/img/skills/bootstrap.png")}
            width="180"
            height="180"
            alt="bootstrap"
          />
          <h3>Bootstrap</h3>
        </div>
        <div className="tech-description">
          <img
            src={require("../../dist/img/skills/sass.png")}
            width="180"
            height="180"
            alt="sass"
          />
          <h3>Sass</h3>
        </div>
      </div>
    </div>
  );
};

export default skills;
