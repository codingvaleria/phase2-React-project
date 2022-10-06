import React from "react";
import NavBar from "./NavBar";
import "./About.css";

function About() {
  return (
    <React.Fragment>
      <NavBar href="/" text="Home" />
      <div className="about-details">
        <h1 id="title"> About Us</h1>
        <div id="description-container" className="description-container">
          We are your tour directory. We give you recommendations of places to
          visit within Kenya. Our recommendation will include a photo, a
          description, charges, opening and closing hours, policies and
          amenities of the place to visit.
        </div>

        <img src="./image/safari.jpeg" />
      </div>
    </React.Fragment>
  );
}

export default About;
