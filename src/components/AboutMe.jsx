import React from "react";
import "../css/aboutMe.css";
const AboutMe = () => {
  return (
    <>
      <section id="aboutMe">
      <div className="heading d-flex align-items-center justify-content-center  flex-column">
          <h3>ABOUT ME</h3>
          <div
            className="headingBorder bg-dark"
            style={{ width: "250px", height: 50 }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
