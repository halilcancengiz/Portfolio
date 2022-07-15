import React from "react";
import "./home.css";
import { useTheme } from "../../context/ThemeContext";
import secondCarousel from "../../images/menuDark.jpg";
import sliderSecond from "../../images/slider2.jpg";
import sliderFirstLight from "../../images/slider1Light.jpg";
import sliderFirstDark from "../../images/slider1Dark.jpg";

const Home = () => {
  let { theme } = useTheme();
  return (
    <>
      <section id="home">
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
                    Hi There! <br />
                    Welcome To My Website.
                    <br /> I'am <span>Halil Can</span>
                    <br /> and I'am <span>Frontend Developer</span>{" "}
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
                    Hi There! <br />
                    Welcome To My Website.
                    <br /> I'am <span>Halil Can</span>
                    <br /> and I'am <span>Frontend Developer</span>{" "}
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
