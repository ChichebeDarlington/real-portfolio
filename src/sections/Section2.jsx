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
          I offer a wide range of services, such Ecommerce website, Real Estate
          website, Blog website, Job Search website, Social App website,
          Bookking App website, and any kind of web application.
        </p>
      </div>
      <div className="section-2-div-2">
        <div className={`${darkMode ? "center-light" : "center"}`}>
          <img src="/design.png" />
          <h3 className={`${darkMode ? "mode-light" : ""}`}>
            Beautiful Designs``
          </h3>
          <p className={`${darkMode ? "mode-light" : null}`}>
            Help you create and bring your design website to live web
            application, with awesome user interface(UI) and user experience(ux)
          </p>
          <h4 className={`${darkMode ? "mode-light" : ""}`}>
            Development/Design Tools That I Use
          </h4>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>Vscode</p>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>HTML</p>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>Figma</p>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>MERN stack</p>
        </div>
        <div className={`${darkMode ? "center-light" : "center"}`}>
          <img src="/code.png" />
          <h3 className={`${darkMode ? "mode-light" : ""}`}>
            Code your dream project
          </h3>
          <p className={`${darkMode ? "mode-light" : ""}`}>
            Do you have an idea for your next great website? Let's make it a
            reality.
          </p>
          <h4 className={`${darkMode ? "mode-light" : ""}`}>
            Development/Design Tools That I Use
          </h4>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>Javascript</p>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>CSS</p>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>BOOTSTRAP</p>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>REACT</p>
        </div>
        <div className={`${darkMode ? "center-light" : "center"}`}>
          <img src="/consulting.png" />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
          <p className={`${darkMode ? "mode-light" : ""}`}>
            Are you interested in feedback for your current project? I can give
            you tips and tricks to level it up.
          </p>
          <h4 className={`${darkMode ? "mode-light" : ""}`}>
            Development/Design Tools That I Use
          </h4>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>EXPRESS</p>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>NODEJS</p>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>MONGODB</p>
          <p className={`${darkMode ? "mode-light" : "p-gray"}`}>TAILWIND</p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
