import React from "react";
import "./Skills.css";

const skills = () => {
  return (
    <div className="skills">
    <div className="changePageScreen">
        <img src={require("../../dist/img/logo.png")} alt="logo" />
        <div className="page-loader" />
      </div>
      <div className="skills-wraper">
        <div className="tech-description">
          <img src={require('../../dist/img/skills/html.png')} width="200" height="200" alt="html" />
          <h3>HTML5</h3>
        </div>
        <div className="tech-description">
        <img src={require('../../dist/img/skills/css.png')} width="200" height="200" alt="css" />
          <h3>CSS3</h3>
        </div>
        <div className="tech-description">
        <img src={require('../../dist/img/skills/js.png')} width="200" height="200" alt="js" />
          <h3>JavaScript</h3>
        </div>
        <div className="tech-description">
        <img src={require('../../dist/img/skills/react.png')} width="200" height="200" alt="react" />
          <h3>ReactJS</h3>
        </div>
        <div className="tech-description">
        <img src={require('../../dist/img/skills/bootstrap.png')} width="200" height="200" alt="bootstrap" />
          <h3>Bootstrap</h3>
        </div>
        <div className="tech-description">
        <img src={require('../../dist/img/skills/sass.png')} width="200" height="200" alt="sass" />
          <h3>Sass</h3>
        </div>
      </div>
    </div>
  );
};

export default skills;
