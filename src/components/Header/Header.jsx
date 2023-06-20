import React from "react";
import logo from "./logo.jpg";
import Button from "../Button/Button";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "cv.pdf";
    link.target = "_blank";
    link.download = "CV.pdf";
    link.click();
  };

  const location = useLocation();

  return (
    <div className="Header">
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about">About</Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Button onClick={handleDownloadCV}>Download Resume</Button>
    </div>
  );
};

export default Header;
