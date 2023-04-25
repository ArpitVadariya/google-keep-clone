import React from "react";
// import logo from "./images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        <p>copyright ©️ {year}</p>
      </footer>
    </>
  );
};

export default Footer;
