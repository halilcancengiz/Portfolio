import React from "react";
import "../css/navigation.css";
export default function Navigation() {
  // clock Parameters

  let openNav = () => {
    document.getElementById("nav").style.width = "100%";
    document.getElementById("nav").style.height = "100%";
  };
  let closeNav = () => {
    document.getElementById("nav").style.width = "0%";
    document.getElementById("nav").style.height = "0%";
  };

  return (
    <>
      <a id="" onClick={openNav} href="#google" className="openBtn">
        <i className="fa fa-bars"></i>
      </a>
      {/* overlay Start */}
      <div
        id="nav"
        className="overlay d-flex align-items-center justify-content-center flex-column"
      >
        <a onClick={closeNav} href="#google" className="closeBtn">
          <i className="fa fa-times"></i>
        </a>
        {/* <Clock /> */}
        <div
          id="navbar"
          className="d-flex align-items-center justify-content-center text-center w-100 h-100"
        >
          <ul>
            <li>
              <a onClick={closeNav} href="#home">
                <i className="fa-solid fa-house"></i>Home
              </a>
            </li>
            <li>
              <a onClick={closeNav} href="#aboutMe">
                <i className="fa-solid fa-id-card-clip"></i>About Me
              </a>
            </li>
            <li>
              <a onClick={closeNav} href="#myProject">
                <i className="fa-solid fa-laptop-code"></i>My Project
              </a>
            </li>
            <li>
              <a onClick={closeNav} href="#technologies">
                <i className="fa-solid fa-cubes"></i>Technologies
              </a>
            </li>
            <li>
              <a onClick={closeNav} href="#contact">
                <i className="fa-solid fa-comment-sms"></i>Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* overlay End */}
    </>
  );
}
