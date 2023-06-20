import React from "react";
import "./About.css";
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
            <h3>Frontend Developer</h3>
            <p>
              In 2017 I completed my bachelor's degree in computer science with
              good grades. From 2018 I have successfully conducted training for
              employees in the use of Windows operating systems and various
              applications. I was responsible for the development and
              implementation of user-friendly front-end solutions. I have also
              created and updated websites and applications using HTML, CSS and
              JavaScript.
            </p>
            <p>
              In 2021 I emigrated to Germany and learned German up to the B2
              level. My goal is to work as a frontend developer in Germany.
            </p>
            <p>
              <b>Current:</b> Responsible for the development and implementation
              ofuser-friendly frontend solutions use ofTechnologies like
              Next.js, React and Chakra UI at PersiaJs.
            </p>
            <Space />
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
