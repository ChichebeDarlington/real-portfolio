import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Section1 = ({ darkMode, setDarkMode }) => {
  return (
    <div className="section-1">
      <nav className="section-1-nav">
        <h1 className={`${darkMode ? "mode-light" : "section-h1"}`}>
          chebe@webDev
        </h1>
        <ul className="section-1-list">
          <li
            className="section-1-list-item"
            onClick={() => setDarkMode(!darkMode)}
          >
            <Link href="#">
              <BsFillMoonStarsFill
                className={`${darkMode ? "mode-light" : "mode"}`}
              />
            </Link>
          </li>
          <li className="section-1-list-item">
            <Link href="/resume" className="resume">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
      <div className="section-1-body">
        <h2 className={`${darkMode ? "mode-light" : ""}`}>Madu Chichebe</h2>
        <h3 className={`${darkMode ? "mode-light" : ""}`}>
          Developer and Designer
        </h3>
        <p>
          {" "}
          Freelancer providing services for web application development and
          design content needs. Hit me on my social account below and let's get
          cracking!
        </p>
        <div className="social">
          <Link to="https://twitter.com/ChichebeD">
            <AiFillTwitterCircle className="icon" />
          </Link>
          <Link to="https://www.linkedin.com/in/chichebe-madu-2096a8242/">
            <AiFillLinkedin className="icon" />
          </Link>
          <Link to="https://web.facebook.com/chichebe.darlington">
            <AiFillFacebook className="icon" />
          </Link>
          <Link to="https://github.com/ChichebeDarlington">
            <AiFillGithub className="icon" />
          </Link>
        </div>
        <div className="img-container">
          <img src="/dev-ed-wave.png" alt="portfolio image" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
