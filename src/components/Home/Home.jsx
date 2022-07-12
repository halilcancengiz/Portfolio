import React from "react";
import "./home.css";
import secondCarousel from "../../images/menu.jpg";
import sliderSecond from "../../images/slider2.jpg";



const Home = () => {

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
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner h-100">
            <div
              className="carousel-item active h-100"
              data-bs-interval="100000"
            >
              <img src="https://picsum.photos/id/1019/1920/1080" className=" w-100 h-100" alt="..." />

              <div className="carousel-caption d-flex align-items-center justify-content-center flex-column text-white h-100">
                <div
                  id="carouselFirstPage"
                  className="d-flex align-items-center justify-content-center flex-column h-100 w-100"
                >
                  <h1>Hi There! <br />Welcome To My Website.<br /> I'am <span>Halil Can</span><br /> and I'am <span>Frontend Developer</span> </h1>
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
                  <h1>Hi There! <br />Welcome To My Website.<br /> I'am <span>Halil Can</span><br /> and I'am <span>Frontend Developer</span> </h1>
                </div>
              </div>
            </div>
            <div className="carousel-item h-100" data-bs-interval="10000">
              <img
                src={secondCarousel}
                className="d-block w-100 h-100"
                alt="..."
              />

              <div className="carousel-caption d-flex align-items-center justify-content-center flex-column text-white h-100">
                <h5 className="">Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
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
