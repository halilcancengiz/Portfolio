import React, { useState, useEffect } from "react";
import "../css/myProject.css";
import instagramImage from "../images/instagram.jpg";
import reactImage from "../images/reactImage2.jpg";
import weatherImage from "../images/weather.jpg";
const MyProject = () => {
  const [getData, setGetData] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/hllcncngz")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => setGetData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div id="myProject">
        <div className="heading text-white d-flex align-items-center justify-content-center flex-column pt-5">
          <h3>MY PROJECTS</h3>
          <div className="headingBorder bg-white"></div>
        </div>
        <div className="container-fluid p-0 text-white d-flex align-items-center justify-content-center flex-column">
          {/* TopSide Start */}
          <div id="topSide" className="w-100">
            <div className="row w-100 g-0 d-flex align-items-center justify-content-center flex-row">
              <div className="projectContainer col-lg-3 col-md-5 mx-auto">
                <img className="imageOverlay" src={reactImage} alt="react" />
                <div className="projectOverlay-1">
                  <div className="projectLink">
                  <h3>React Photo Search App </h3>
                    <div className="headingBorder2 bg-dark"></div>
                    <a href="https://github.com/hllcncngz/Fotograflar-Projesi" data-toggle="tooltip" data-placement="top" title="Projeyi İncele">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                    <div className="headingBorder bg-dark"></div>
                  </div>
                </div>
              </div>
              <div className="projectContainer col-lg-3 col-md-5 mx-auto">
                <img
                  className="imageOverlay"
                  src={weatherImage}
                  alt="weather"
                />
                <div className="projectOverlay-2">
                  <div className="projectLink">
                  <h3>Weather App Js</h3>
                    <div className="headingBorder2 bg-dark"></div>
                    <a href="https://github.com/hllcncngz/Weather" data-toggle="tooltip" data-placement="top" title="Projeyi İncele">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                    <div className="headingBorder bg-dark"></div>
                  </div>
                </div>
              </div>
              <div className="projectContainer col-lg-3 col-md-5 mx-auto">
                <img
                  className="imageOverlay"
                  src={instagramImage}
                  alt="Instagram clone"
                />
                <div className="projectOverlay-3">
                  <div className="projectLink">
                    <h3>Bootstrap Instagram Clone</h3>
                    <div className="headingBorder2 bg-dark"></div>
                    <a href="https://github.com/hllcncngz/Bootstrap-Patika--dev/tree/master/%C4%B1nstagram-bootstrap" data-toggle="tooltip" data-placement="top" title="Projeyi İncele">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                    <div className="headingBorder bg-dark"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* TopSide End */}
          {/* BottomSide Start */}
          <div id="bottomSide">
            <div className="row w-100">
              <div className="githubCount d-flex align-items-center justify-content center flex-column col-md-4">
                <div className="githubCountIcon">
                  <i className="fa-solid fa-person-walking-arrow-loop-left text-white"></i>
                </div>
                <div className="githubCountValue my-3">{getData.followers}</div>
                <div className="githubCountDescription">Github Followers</div>
              </div>
              <div className="githubCount d-flex align-items-center justify-content center flex-column col-md-4">
                <div className="githubCountIcon">
                  <i className="fa-solid fa-person-walking-arrow-right text-white"></i>
                </div>
                <div className="githubCountValue my-3">{getData.following}</div>
                <div className="githubCountDescription">Github Following</div>
              </div>
              <div className="githubCount d-flex align-items-center justify-content center flex-column col-md-4">
                <div className="githubCountIcon">
                  <i className="fa-solid fa-folder-open text-white"></i>
                </div>
                <div className="githubCountValue my-3">
                  {getData.public_repos}
                </div>
                <div className="githubCountDescription">
                  Github Public Repository
                </div>
              </div>
            </div>
          </div>
          {/* BottomSide End */}
        </div>
      </div>
    </>
  );
};

export default MyProject;
