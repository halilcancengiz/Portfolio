import React from "react";
import "../css/contact.css";
const Contact = () => {
  return (
    <>
      <div className="bg-dark py-5" id="contact">
      <div className="heading d-flex align-items-center justify-content-center  flex-column">
          <h3 className="text-white">CONTACT ME</h3>
          <div
            className="headingBorder bg-white"
            style={{ width: "250px", height: 50 }}
          ></div>
        </div>
        <div className="container" id="contactContainer">
          {/* ContactForm Start */}
          <div id="contactDetails">
            <h3>Contact Details</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur, rem iure? Repudiandae sapiente odit labore aliquam
              consequatur, aspernatur alias quibusdam.
            </p>
            <div className="d-flex flex-row align-items-center mt-3">
              <i className="fa-solid fa-phone"></i>
              <span>Phone: 0538 770 80 40</span>
            </div>
            <div className="d-flex flex-row align-items-center mt-2">
              <i className="fa-solid fa-envelope"></i>
              <span>Email: hllcncngz1@gmail.com</span>
            </div>
            <div className="d-flex flex-row align-items-center mt-2">
              <i className="fa-solid fa-location-dot"></i>
              <span>Adress: Düzce/Türkiye</span>
            </div>
          </div>
          {/* ContactForm End */}

          {/* contactDetails Start */}
          <div id="contactForm">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Subject" />
              <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
              <button type="submit">Submit</button>
          </div>
          {/* contactDetails End */}
        </div>
      </div>
    </>
  );
};

export default Contact;

{
  /* <div id="footerInfo" className="w-100">
<div className="row text-center w-100 m-0">

  <div className="col-lg-4 d-flex align-items-center justify-content-center flex-column">
    
    <p>538 770 80 40</p>
  </div>

  <div className="col-lg-4 d-flex align-items-center justify-content-center flex-column">
    
    <p>hllcncngz1@gmail.com</p>
  </div>

  <div className="col-lg-4 d-flex align-items-center justify-content-center flex-column">
    
    <p>Türkiye / Düzce</p>
  </div>

</div>
</div> */
}
