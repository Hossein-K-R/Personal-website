import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import "./Footer.css";
import ".././Icons/Icons.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <ul>
        <li>
          <a href="https://www.facebook.com/hossein.karbakhshravari/">
            <FaFacebook className="Icons" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Hossein-K-R">
            <FaGithub className="Icons" />
          </a>
        </li>
      </ul>
      <span className="copyright">© 2023. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
