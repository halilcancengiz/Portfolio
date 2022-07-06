import React, { useState, useEffect } from "react";

const Clock = () => {
  const [clock, setClock] = useState({
    dayValue: "Gün",
    hourValue: "Saat",
    minuteValue: "Dakika",
    secondValue: "Saniye",
  });
  let clockFunc = () => {
    let date = new Date();
    let dayDOM = date.getDay();
    let hourDOM = date.getHours();
    let minuteDOM = date.getMinutes();
    let secondDOM = date.getSeconds();

    setClock({
      dayValue:
        dayDOM === 0
          ? "Pazar"
          : dayDOM === 1
          ? "Pazartesi"
          : dayDOM === 2
          ? "Salı"
          : dayDOM === 3
          ? "Çarşamba"
          : dayDOM === 4
          ? "Perşembe"
          : dayDOM === 5
          ? "Cuma"
          : "Cumartesi",
      hourValue: hourDOM,
      minuteValue: minuteDOM,
      secondValue: secondDOM,
    });
  };

  useEffect(() => {
    setInterval(clockFunc, 1000);
  }, []);
  return (
    <>
      {/* clock Start */}
      <div
        id="clock"
        className="text-white d-flex align-items-center justify-content-center col-12"
      >
        <div
          style={{ width: 100, height: 100,fontSize:"32px" }}
          className="rounded-pill d-flex align-items-center justify-content-center text-white "
        >
          {clock.dayValue}
        </div>
        <div
          style={{ width: 100, height: 100,fontSize:"32px" }}
          className="rounded-pill d-flex align-items-center justify-content-center text-white  mx-1"
        >
          {clock.hourValue}
        </div>
        <div
          style={{ width: 100, height: 100 ,fontSize:"32px" }}
          className="rounded-pill d-flex align-items-center justify-content-center text-white  me-1"
        >
          {clock.minuteValue}
        </div>
        <div
          style={{ width: 100, height: 100 ,fontSize:"32px"}}
          className="rounded-pill d-flex align-items-center justify-content-center text-white "
        >
          {clock.secondValue}
        </div>
      </div>
      {/* clock End */}
    </>
  );
};

export default Clock;
