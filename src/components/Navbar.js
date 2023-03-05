import React, { useState } from "react";
import "./CSS/Navbar.css";
import { Link } from "react-scroll";
import { Close, Menu } from "@material-ui/icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <Link to="home" spy={true} smooth={true} duration={500}>
          arun.rajbhar
        </Link>
      </div>

      <div className="navbar-right-menubar">
        {isMenuOpen ? (
          <div className="navbar-menu-options">
            <Close onclick={() => setIsMenuOpen(!isMenuOpen)} />
            <Link
              onclick={() => setIsMenuOpen(!isMenuOpen)}
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              home
            </Link>

            <Link
              onclick={() => setIsMenuOpen(!isMenuOpen)}
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              about
            </Link>

            <Link
              onclick={() => setIsMenuOpen(!isMenuOpen)}
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              skills
            </Link>

            <Link
              onclick={() => setIsMenuOpen(!isMenuOpen)}
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              projects
            </Link>

            <Link
              onclick={() => setIsMenuOpen(!isMenuOpen)}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              contact
            </Link>
          </div>
        ) : (
          <Menu onclick={() => setIsMenuOpen(!isMenuOpen)} />
        )}
      </div>

      <div className="navbar-right-options">
        <Link to="home" spy={true} smooth={true} duration={500}>
          home
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500}>
          about
        </Link>
        <Link to="skills" spy={true} smooth={true} duration={500}>
          skills
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={500}>
          projects
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
