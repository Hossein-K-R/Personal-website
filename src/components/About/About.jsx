import React from "react";
import "./About.css";
import Button from "../Button/Button";
import Space from "../Space/Space";
import Layout from "../Layout/Layout";
import ReactSlick from "../slideshow/slideshow";

const About = () => {
  return (
    <Layout>
      <div className="cotainer">
        <div className="About">
          <div className="About--ContentSection">
          <h1>I'm Hossein Karbakhsh Ravari</h1>
          <h3>Developer</h3>
        <p>In 2018 I completed my bachelor's degree in computer science with good grades.
           From 2018 to 2021 I worked in Georgia as a windows application developer.
            I immigrated to Germany in 2021 and learned German up to B2 level and would like to study my Masters in Germany.
          </p>
            <Space />
            <Space />
            <Button>Download Resume</Button>
          </div>
        </div>
        <div className="slider">
          <ReactSlick />
        </div>
      </div>
    </Layout>
  );
};
export default About;
