import React, { useState, useRef } from "react";
import alertify from "alertifyjs";

import "./home.css";
import "./register.css";
import "./login.css";
import { useTheme } from "../../context/ThemeContext";
import sliderSecond from "../../images/slider2.jpg";
import sliderFirstLight from "../../images/slider1Light.jpg";
import sliderFirstDark from "../../images/slider1Dark.jpg";

const Home = () => {
  let { theme } = useTheme();

  let [registerName, setRegisterName] = useState("");
  let [registerSurname, setRegisterSurname] = useState("");
  let [registerEmail, setRegisterEmail] = useState("");
  let [registerYearOfBirt, setRegisterYearOfBirt] = useState("");
  let [registerPassword, setRegisterPassword] = useState("");
  let [registerRePassword, setRegisterRePassword] = useState("");

  // "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$" regex password
  let passwordRgx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
  let registerSubmitFonk = (e) => {
    if (
      registerName.length == 0 ||
      registerEmail.length == 0 ||
      registerSurname.length == 0 ||
      registerPassword.length == 0 ||
      registerRePassword.length == 0 ||
      registerYearOfBirt.length == 0
    ) {
      alertify.error("Hiç bir alan boş bırakılamaz", 2);
    } else {
      alertify.success("Tebrikler Kayıt İşlemi Başarılı", 2);
    }

    e.preventDefault();
  };

  let openRegister = () => {
    if (theme === "dark") {
      document.querySelector(".registerModalDark").style.width = "100vw";
      document.querySelector(".registerModalDark").style.height = "100vh";
      document.querySelector(".registerModalDark").style.zIndex = "3";
    } else {
      document.querySelector(".registerModalLight").style.width = "100vw";
      document.querySelector(".registerModalLight").style.height = "100vh";
      document.querySelector(".registerModalLight").style.zIndex = "3";
    }
  };
  let closeRegister = () => {
    if (theme === "dark") {
      document.querySelector(".registerModalDark").style.width = "0%";
      document.querySelector(".registerModalDark").style.height = "0%";
      document.querySelector(".registerModalDark").style.zIndex = "0";
    } else {
      document.querySelector(".registerModalLight").style.width = "0%";
      document.querySelector(".registerModalLight").style.height = "0%";
      document.querySelector(".registerModalLight").style.zIndex = "0";
    }
  };
  let openLogin = () => {
    if (theme === "dark") {
      document.querySelector(".loginModalDark").style.width = "100vw";
      document.querySelector(".loginModalDark").style.height = "100vh";
      document.querySelector(".loginModalDark").style.zIndex = "3";
    } else {
      document.querySelector(".loginModalLight").style.width = "100vw";
      document.querySelector(".loginModalLight").style.height = "100vh";
      document.querySelector(".loginModalLight").style.zIndex = "3";
    }
  };
  let closeLogin = () => {
    if (theme === "dark") {
      document.querySelector(".loginModalDark").style.width = "0%";
      document.querySelector(".loginModalDark").style.height = "0%";
      document.querySelector(".loginModalDark").style.zIndex = "0";
    } else {
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
        {/* Register Modal START */}
        <div
          className={
            theme === "dark" ? "registerModalDark" : "registerModalLight"
          }
        >
          <button onClick={closeRegister} className="closeRegisterModal">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div
            className={
              "d-flex align-items-center justify-content-center flex-column " +
              (theme === "dark" ? "registerDarkForm" : "registerLightForm")
            }
          >
            <h2 className="text-white mb-5">Create an Account</h2>
            <form
              onSubmit={registerSubmitFonk}
              className="d-flex align-items-center justify-content-center flex-column"
            >
              <div className="w-100 d-flex align-items-center justify-content-center flex-row mb-2">
                <i className="fa-solid fa-user"></i>
                <div
                  style={{ padding: "0px 10px" }}
                  className="d-flex align-items-center justify-content-center"
                >
                  <input
                    className="m-0 me-3"
                    type="text"
                    placeholder="Your Name"
                    value={registerName}
                    onChange={(e) => setRegisterName(e.target.value)}
                  />
                  <input
                    className="m-0"
                    type="text"
                    placeholder="Your Surname"
                    value={registerSurname}
                    onChange={(e) => setRegisterSurname(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-100 d-flex align-items-center justify-content-center flex-row">
                <i className="fa-solid fa-at"></i>
                <input
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  value={registerEmail}
                  type="email"
                  placeholder="Your E-mail"
                />
              </div>
              <div className="w-100 d-flex align-items-center justify-content-center flex-row">
                <i className="fa-solid fa-cake-candles"></i>
                <input
                  onChange={(e) => setRegisterYearOfBirt(e.target.value)}
                  value={registerYearOfBirt}
                  type="number"
                  placeholder="Year Of Birth"
                />
              </div>
              <div className="w-100 d-flex align-items-center justify-content-center flex-row">
                <i className="fa-solid fa-unlock-keyhole"></i>
                <input
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  value={registerPassword}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="w-100 d-flex align-items-center justify-content-center flex-row">
                <i className="fa-solid fa-repeat"></i>
                <input
                  onChange={(e) => setRegisterRePassword(e.target.value)}
                  value={registerRePassword}
                  type="password"
                  placeholder="Password Repeat"
                />
              </div>

              <button type="submit">Create Account</button>
            </form>
          </div>
        </div>
        {/* Register Modal END */}
        {/* Login Modal START */}
        <div
          className={theme === "dark" ? "loginModalDark" : "loginModalLight"}
        >
          <button onClick={closeLogin} className="closeLoginModal">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div
            className={
              "d-flex align-items-center justify-content-center flex-column " +
              (theme === "dark" ? "loginDarkForm" : "loginLightForm")
            }
          >
            <h2 className="text-white mb-3">
              <b>LOGIN</b>
            </h2>
            <form className="d-flex align-items-center justify-content-center flex-column">
              <div className="w-100 d-flex align-items-center justify-content-center flex-row">
                <i className="fa-solid fa-at rounded-circle"></i>
                <input
                  className="rounded-pill"
                  type="email"
                  placeholder="Your E-mail"
                />
              </div>
              <div className="w-100 d-flex align-items-center justify-content-center flex-row">
                <i className="fa-solid fa-unlock-keyhole rounded-circle"></i>
                <input
                  className="rounded-pill"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div id={theme === "dark" ? "loginDark" : "loginLight"}>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-google"></i>
                </a>
              </div>

              <button type="submit" className="rounded-pill">
                Login
              </button>
            </form>
          </div>
        </div>
        {/* Login Modal END */}
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
