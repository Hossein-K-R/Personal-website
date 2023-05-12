import React from "react";
import Button from "../Button/Button";
import "./Banner.css";
import Space from "../Space/Space";
import Img from "./Hossein1.jpg";
import bannerImg from "./banner-background.png";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="Banner">
      <div className="Banner--BackgroundImage">
        <img src={bannerImg} />
      </div>
      <div className="Banner--Quote">
        <h5>Welcome to my website with ReactJs</h5>
      </div>
      <div className="Banner--Child">
        <div className="Banner--Content">
          <h1>
            Hi!
            <span className="Banner__primaryColor">
              {" "}
              I'm Hossein Karbakhsh Ravari
            </span>
            <br />
            <br />
            Great to see you.
          </h1>
          <h3>Do you want to know more about me? So click the button below.</h3>
          <Space />
          <Space />
          <div className="Banner--Button">
          <Link to="/about"><Button>abuot me</Button></Link>
            
          </div>
        </div>
        <div className="Banner--Profile">
          <img src={Img} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
