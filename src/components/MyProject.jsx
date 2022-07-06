import React, { useState, useEffect } from "react";
import "../css/myProject.css";

const MyProject = () => {
  const [getData, setGetData] = useState();
  useEffect(() => {
    fetch("https://api.github.com/users/hllcncngz")
      .then((res) => res.json())
      .then((data) => setGetData(data))
  }, []);

  console.log(getData);

  return (
    <>
      <section id="myProject">
        <div className="heading d-flex align-items-center justify-content-center  flex-column">
          <h3>MY PROJECT</h3>
          <div
            className="headingBorder bg-dark"
            style={{ width: "250px", height: 50 }}
          ></div>
        </div>
        <div className="mx-auto">
          <img src={getData.avatar_url} alt="" />
        </div>
      </section>
      ;
    </>
  );
};

export default MyProject;
