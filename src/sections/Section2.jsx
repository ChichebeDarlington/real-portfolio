import React from "react";

const Section2 = ({ darkMode }) => {
  return (
    <section className="section-2">
      <div className="section-2-div-1">
        <h3 className={`${darkMode ? "mode-light" : ""}`}>Services I offer</h3>
        <p className="">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className=""> agencies </span>
          consulted for <span className="">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className="">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="section-2-div-2">
        <div className={`${darkMode ? "center-light" : "center"}`}>
          <img src="/design.png" />
          <h3 className={`${darkMode ? "mode-light" : ""}`}>
            Beautiful Designs
          </h3>
          <p className={`${darkMode ? "mode-light" : null}`}>
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className={`${darkMode && "mode-light"}`}>Design Tools I Use</h4>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>Photoshop</p>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>Illustrator</p>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>Figma</p>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>Indesign</p>
        </div>
        <div className={`${darkMode ? "center-light" : "center"}`}>
          <img src="/code.png" />
          <h3 className={`${darkMode && "mode-light"}`}>
            Code your dream project
          </h3>
          <p className={darkMode && "mode-light"}>
            Do you have an idea for your next great website? Let's make it a
            reality.
          </p>
          <h4 className={darkMode && "mode-light"}>Design Tools I Use</h4>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>Photoshop</p>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>Illustrator</p>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>Figma</p>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>Indesign</p>
        </div>
        <div className={`${darkMode ? "center-light" : "center"}`}>
          <img src="/consulting.png" />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
          <p className={`${darkMode ? "mode-light" : null}`}>
            Are you interested in feedback for your current project? I can give
            you tips and tricks to level it up.
          </p>
          <h4 className={`${darkMode && "mode-light"}`}>Design Tools I Use</h4>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>Photoshop</p>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>Illustrator</p>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>Figma</p>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>Indesign</p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
