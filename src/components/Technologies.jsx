import React, { useState } from "react";
import "../css/technologies.css";
import jsIcon from "../images/technologies/1.png";
import reactIcon from "../images/technologies/2.png";
import htmlIcon from "../images/technologies/3.png";
import cssIcon from "../images/technologies/4.png";
import nodejsIcon from "../images/technologies/5.png";
import bootstrapIcon from "../images/technologies/6.png";
import rdesignIcon from "../images/technologies/7.jpg";
import gitIcon from "../images/technologies/8.png";

const Technologies = () => {
  const [searchTechnologyValue, setSearchTechnologyValue] = useState("");
  const [technologiesCard, setTechnologiesCard] = useState([
    { id: 1, name: "Javascript", url: jsIcon },
    { id: 2, name: "React", url: reactIcon },
    { id: 3, name: "HTML 5", url: htmlIcon },
    { id: 4, name: "CSS 3", url: cssIcon },
    { id: 5, name: "NodeJS", url: nodejsIcon },
    { id: 6, name: "Bootstrap", url: bootstrapIcon },
    { id: 7, name: "Responsive Design", url: rdesignIcon },
    { id: 8, name: "GIT", url: gitIcon },
  ]);
  let filteredTechnology = technologiesCard.filter((x) =>
    x.name.toLowerCase().includes(searchTechnologyValue.toLowerCase())
  );
  return (
    <>
      <div id="technologies">
        <div className="heading text-dark d-flex align-items-center justify-content-center pt-5  flex-column">
          <h3>TECHNOLOGIES</h3>
          <div className="headingBorder bg-dark"></div>
        </div>

        <div id="technologiesCardContainer">
          <div className="row container mx-auto d-flex align-items-center justify-content-center">
            <div className="col-lg-12 d-flex align-items-center justify-content-center flex-row mb-5">
              <div id="searchContainer">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input
                  onChange={(e) => setSearchTechnologyValue(e.target.value)}
                  type="text"
                  value={searchTechnologyValue}
                  className=""
                  id="searchTechnologyInput"
                  placeholder="Search Technology"
                />
              </div>
            </div>

            {filteredTechnology.map((technology) => {
              return (
                <div
                  key={technology.id}
                  className="technologiesCard col-lg-2 col-md-4 col-sm-6"
                >
                  <div id="card">
                    <img src={technology.url} alt={technology.name} />
                    <p>{technology.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
