import React from "react";
import "./Contact.css";
const contact = () => {
  return (
    <div className="contact">
      <div className="changePageScreen">
        <img src={require("../../dist/img/logo.png")} alt="logo" />
        <div className="page-loader" />
      </div>
      <img
        className="contact-img"
        src={require("../../dist/img/contact/contact.png")}
        alt="contact"
      />
      <div className="contact-wrapper">
        <h2>Contact me</h2>
        <h3>Patryk Koski</h3>
        <h3>+48 724 303 821</h3>
        <h3>kontakt@patrykkoski.pl</h3>
        <h3>Warsaw</h3>
        <div className="socials">
          <a href="/">
            <img
              src={require("../../dist/img/contact/li.png")}
              alt="linkedin"
            />
          </a>
          <a href="/">
            <img src={require("../../dist/img/contact/gh.png")} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default contact;
