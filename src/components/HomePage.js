import "./CSS/HomePage.css";
import { GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import Navbar from "./Navbar";

const HomePage = () => (
  <div className="home-page-container">
    <div className="home-page-header">
      <Navbar />
    </div>
    <div className="home-page">
      <div>
        <span>hey,</span>
        <p>
          this is<span>Arun</span>,
        </p>
      </div>
      <span>a FullStack Developer</span>
    </div>
    <div className="home-page-footer">
      <a
        href="https://github.com/arunr97/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
      </a>

      <a
        href="www.linkedin.com/in/arun-kumar-rajbhar-0109818a"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn />
      </a>

      <a href="" target="_blank" rel="noopener noreferrer">
        <Instagram />
      </a>
    </div>
  </div>
);

export default HomePage;
