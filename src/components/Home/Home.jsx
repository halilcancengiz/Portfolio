import React from "react";
import "./home.css";
import { useTheme } from "../../context/ThemeContext";
import sliderSecond from "../../images/slider2.jpg";
import sliderFirstLight from "../../images/slider1Light.jpg";
import sliderFirstDark from "../../images/slider1Dark.jpg";

const Home = () => {
  let { theme } = useTheme();

  let openRegister = () => {
    if (theme === "dark") {
      document.querySelector(".registerModalDark").style.width = "100%";
      document.querySelector(".registerModalDark").style.height = "100%";
      document.querySelector(".registerModalDark").style.zIndex = "3";
    } else {
      document.querySelector(".registerModalLight").style.width = "100%";
      document.querySelector(".registerModalLight").style.height = "100%";
      document.querySelector(".registerModalLight").style.zIndex = "3";
    }
  };

  let closeRegister = () => {
    if (theme === "dark") {
      document.querySelector(".registerModalDark").style.width = "0%";
      document.querySelector(".registerModalDark").style.height = "0%";
      document.querySelector(".registerModalDark").style.zIndex = "0";
    }
    else{
      document.querySelector(".registerModalLight").style.width = "0%";
      document.querySelector(".registerModalLight").style.height = "0%";
      document.querySelector(".registerModalLight").style.zIndex = "0";
    }
  };
  let openLogin = () => {
    if (theme === "dark") {
      document.querySelector(".loginModalDark").style.width = "100%";
      document.querySelector(".loginModalDark").style.height = "100%";
      document.querySelector(".loginModalDark").style.zIndex = "3";
    } else {
      document.querySelector(".loginModalLight").style.width = "100%";
      document.querySelector(".loginModalLight").style.height = "100%";
      document.querySelector(".loginModalLight").style.zIndex = "3";
    }
  };

  let closeLogin = () => {
    if (theme === "dark") {
      document.querySelector(".loginModalDark").style.width = "0%";
      document.querySelector(".loginModalDark").style.height = "0%";
      document.querySelector(".loginModalDark").style.zIndex = "0";
    }
    else{
      document.querySelector(".loginModalLight").style.width = "0%";
      document.querySelector(".loginModalLight").style.height = "0%";
      document.querySelector(".loginModalLight").style.zIndex = "0";
    }
  };

  return (
    <>
      <section id="home">
        {/* Validation Area START */}
        <div
          className={
            theme === "dark" ? "validationButtonDark" : "validationButtonLight"
          }
        >
          <button
            onClick={openRegister}
            className={
              theme === "dark" ? "registerDarkPage" : "registerLightPage"
            }
          >
            Register
          </button>
          <button
          onClick={openLogin}
            className={theme === "dark" ? "loginDarkPage" : "loginLightPage"}
          >
            Login
          </button>
        </div>

        <div
          className={
            theme === "dark" ? "registerModalDark" : "registerModalLight"
          }
        >
          <button onClick={closeRegister} className="closeRegisterModal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div
          className={
            theme === "dark" ? "loginModalDark" : "loginModalLight"
          }
        >
          <button onClick={closeLogin} className="closeLoginModal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        {/* Validation Area END */}

        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide w-100 h-100"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
              style={{ width: "30px", height: "20px", borderRadius: "50%" }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              style={{ width: "30px", height: "20px", borderRadius: "50%" }}
            ></button>
          </div>
          <div className="carousel-inner h-100">
            <div
              className="carousel-item active h-100"
              data-bs-interval="100000"
            >
              <img
                src={theme === "dark" ? sliderFirstDark : sliderFirstLight}
                className=" w-100 h-100"
                alt="..."
              />
              <div className="carousel-caption d-flex align-items-center justify-content-center flex-column text-white h-100">
                <div
                  id="carouselFirstPage"
                  className="d-flex align-items-center justify-content-center flex-column h-100 w-100"
                >
                  <h1>
                    {" "}
                    Hi There! <br /> Welcome To My Website. <br /> I'am{" "}
                    <span>Halil Can</span> <br /> and I'am{" "}
                    <span>Frontend Developer</span>{" "}
                  </h1>
                </div>
              </div>
            </div>
            <div className="carousel-item h-100" data-bs-interval="100000">
              <img
                src={sliderSecond}
                className="d-block w-100 h-100"
                alt="..."
              />
              <div className="carousel-caption d-flex align-items-center justify-content-center flex-column text-white h-100">
                <div
                  id="carouselSecondPage"
                  className="d-flex align-items-center justify-content-center flex-column h-100 w-100"
                >
                  <h1>
                    {" "}
                    Hi There! <br /> Welcome To My Website. <br /> I'am{" "}
                    <span>Halil Can</span> <br /> and I'am{" "}
                    <span>Frontend Developer</span>{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              id="prevButton"
              aria-hidden="true"
              data-toggle="tooltip"
              data-placement="top"
              title="Previous"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              id="nextButton"
              aria-hidden="true"
              data-toggle="tooltip"
              data-placement="top"
              title="Next"
            >
              <i className="fa-solid fa-angle-right"></i>
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
