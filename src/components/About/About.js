import React from "react";
import "./About.css";

const about = () => {
  return (
    <div className="about">
      <div className="changePageScreen">
        <img src={require("../../dist/img/logo.png")} alt="logo" />
        <div className="page-loader" />
      </div>
      <div className="about-img" />
      <div className="about-content">
        <h2>ABOUT ME</h2>
        <p>
          I am currently working for Synergy Polska for 2 years as a PLC and
          JavaScript programmer. Besides, I've been working as a freelancer for
          a year. I have completed several projects that you can see in the
          portfolio. In addition, I study Electronics and Telecommunications at
          the Warsaw University of Technology. I also studied Automation and
          Robotics
        </p>
      </div>
    </div>
  );
};

export default about;
