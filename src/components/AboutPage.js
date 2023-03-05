import React from "react";
import "./CSS/AboutPage.css";

const AboutPage = () => (
  <>
    <div className="about-container">
      <div className="about-header">
        ab<span>out</span>
      </div>

      <div className="about-info">
        <div className="about-left">
          I love to create Something simple and clean using javascript with
          React.
        </div>

        <div className="about-right">
          <p>
            I'm Arun Kumar Rajbhar. I am a <span>Full Stack Developer</span>. I
            have done Bachelor's in Engineering from {""}
            <span>MGM's CET</span>, Navi-Mumbai.
          </p>

          <p>
            I specialize in efficient <span>React</span> apps and{" "}
            <span>Node</span> applications that just work across all platforms
            and browsers. I care deeply about building interfaces that are
            usable and pleasant for the most number of people possible.
          </p>

          <p>
            Right now, I'm excited about improving my skills and becoming a{" "}
            <span>Better Developer</span>.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default AboutPage;
