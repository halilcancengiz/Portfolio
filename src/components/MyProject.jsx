import React, { useState, useEffect } from "react";
import "../css/myProject.css";
import axios from "axios";

const MyProject = () => {
  const [getData, setGetData] = useState();

  const getDataFromApi = async() => {
    await axios.get("https://api.github.com/users/hllcncngz").then((res) => {
      setGetData(res.data);
    });
  };
  useEffect(() => {
    getDataFromApi();
  }, []);



  return (
    <>
      <section id="myProject">
        <div className="heading d-flex align-items-center justify-content-center  flex-column">
          <h3>MY PROJECT</h3>
          <div
            className="headingBorder bg-dark"
          ></div>
        </div>
        <div className="mx-auto"></div>
      </section>
      ;
    </>
  );
};

export default MyProject;
