import "./App.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import SkillPage from "./components/SkillPage";
import ProjectPage from "./components/ProjectPage";
import EducationPage from "./components/EducationPage";
import ContactPage from "./components/ContactPage";

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setShowTopBtn(true);
    } else if (scrolled <= 500) {
      setShowTopBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="app-section" id="home">
        <HomePage />
      </div>
      <div className="app-section" id="about">
        <AboutPage />
      </div>
      <div className="app-section" id="skills">
        <SkillPage />
      </div>
      <div className="app-section" id="projects">
        <ProjectPage />
      </div>
      <div className="app-section" id="education">
        <EducationPage />
      </div>
      <div className="app-section" id="contact">
        <ContactPage />
      </div>
      {showTopBtn && (
        <button className="btn-back-to-top" onclick={scrollToTop}>
          <span>Back to Top</span>
          <ArrowUpwardIcon />
        </button>
      )}
    </>
  );
}

export default App;
