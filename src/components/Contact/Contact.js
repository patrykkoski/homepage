import React from "react";
import "./Contact.css";
const contact = () => {
  return (
    <div className="contact">
      <div className="changePageScreen">
        <img src={require("../../dist/img/logo.png")} alt="logo" />
        <div className="page-loader" />
      </div>
      <div className="contact-img" />
      <div className="contact-wrapper">
        <h2>Contact me</h2>
        <h3>Patryk Koski</h3>
        <h3>+48 724 303 821</h3>
        <h3>kontakt@patrykkoski.pl</h3>
        <h3>Warsaw</h3>
        <div className="socials">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/patryk-koski-a7139616b/"
          >
            <img
              src={require("../../dist/img/contact/li.png")}
              alt="linkedin"
            />
          </a>
          <a target="_blank" href="https://github.com/patrykkoski">
            <img src={require("../../dist/img/contact/gh.png")} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default contact;
