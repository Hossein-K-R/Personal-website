import React from "react";
import Slider from "react-slick";
import "./slideshow.css";
import Img from './Hossein.jpg'
import Img1 from './Hossein1.jpg'
import Img2 from './logo.jpg'


const settings = {
  dots: true,
};

const ReactSlick = () => (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img src={Img1} />
        </div>
        <div>
          <img src={Img2} />
        </div>
        <div>
          <img src={Img} />
        </div>
      </Slider>
    </div>
);

export default ReactSlick;
