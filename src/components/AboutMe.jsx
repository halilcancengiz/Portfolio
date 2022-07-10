import React from "react";
import "../css/aboutMe.css";
// import aboutTopImage from "../images/boris-stefanik-wxJscL5ZzDA-unsplash.jpg";
const AboutMe = () => {
  return (
    <>
      <div id="aboutMe">
        <div className="heading d-flex align-items-center justify-content-center  flex-column">
          <h3>ABOUT ME</h3>
          <div
            className="headingBorder bg-dark"
            style={{ width: "250px", height: 50 }}
          ></div>
        </div>
       
      </div>
    </>
  );
};

export default AboutMe;
