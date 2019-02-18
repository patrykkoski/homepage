import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "./Navbar.css";
import BackgroundPage from "../BackgroundPage/BackgroundPage";
import About from '../About/About';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../../components/Contact/Contact';

const navbar = () => {
  return (
    <div>
      <nav className="nav">
        <a href="/">
          <img
            src={require("../../dist/img/logo.png")}
            width="100"
            height="100"
            alt="logo"
          />
        </a>
        <ul>
          <li>
            <NavLink to="/mainpage" className="first-nav-item">
              <span className="fas fa-home" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="second-nav-item">
              <span className="fas fa-user" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className="third-nav-item">
              <span className="fas fa-chart-bar" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className="fourth-nav-item">
              <span className="fas fa-tasks" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="fifth-nav-item">
              <span className="fas fa-envelope" />
            </NavLink>
          </li>
        </ul>
        <a href="/" className="linked-in-icon">
          <span className="fab fa-linkedin" />
        </a>
      </nav>
      <Switch>
        <Route path="/mainpage" exact component={BackgroundPage} />
        <Route path="/about" exact component={About} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </div>
  );
};

export default navbar;
