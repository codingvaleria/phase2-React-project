import React from "react";
import NavBar from "./NavBar";

function Aboutus() {
  return (
    <React.Fragment>
      <NavBar href="./index.html" text="Home" />
      <div class="details">
        <h1 id="title"> About Us</h1>
        <div id="description-container" class="description-container">
          We are your tour directory. We give you recommendations of places to
          visit within Kenya. Our recommendation will include a photo, a
          description, charges, opening and closing hours, policies and
          amenities of the place to visit.
        </div>

        {/* <img src="./images/safari.jpeg"> </img> */}
      </div>
    </React.Fragment>
  );
}

export default Aboutus;
