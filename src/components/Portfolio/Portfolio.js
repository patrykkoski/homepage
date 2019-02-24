import React from "react";
import { NavLink } from "react-router-dom";
import "./Portfolio.css";

const portfolio = () => {
  return (
    <div className="portfolio">
      <div className="changePageScreen">
        <img src={require("../../dist/img/logo.png")} alt="logo" />
        <div className="page-loader" />
      </div>
      <div className="portfolio-wrapper">
        <a href="http://www.automatify.pl" target="_blank">
          <img
            src={require("../../dist/img/portfolio/automatify.png")}
            alt="Automatify"
          />
        </a>
        <a href="http://www.synergyteam.pl" target="_blank">
          <img
            src={require("../../dist/img/portfolio/team.png")}
            alt="Synergy Team"
          />
        </a>
        <a href="http://www.trenerpersonalny-wielun.pl" target="_blank">
          <img
            src={require("../../dist/img/portfolio/test.png")}
            alt="Trener Personalny Wieluń"
          />
        </a>
        <a href="http://www.synergy.pl" target="_blank">
          <img
            src={require("../../dist/img/portfolio/synergy.png")}
            alt="Synergy"
          />
        </a>
        <a href="http://www.marekbaran.pl" target="_blank">
          <img
            src={require("../../dist/img/portfolio/marekbaran.png")}
            alt="marekbaran"
          />
        </a>
        <NavLink to="/portfolio" disabled>
          <p>Project will appear soon...</p>
        </NavLink>
        <NavLink to="/portfolio" disabled>
          <p>Project will appear soon...</p>
        </NavLink>
        <NavLink to="/portfolio" disabled>
          <p>Project will appear soon...</p>
        </NavLink>
        <NavLink to="/portfolio" disabled>
          <p>Project will appear soon...</p>
        </NavLink>
      </div>
    </div>
  );
};

export default portfolio;
