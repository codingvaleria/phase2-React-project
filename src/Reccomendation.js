import React from "react";
import LocationList from "./LocationList";
import Location from "./Location";
import NavBar from "./NavBar";

function Reccomendation() {
  return (
    <React.Fragment>
      <NavBar />
      <div id="body-details">
        <LocationList />
        <Location />
      </div>
    </React.Fragment>
  );
}

export default Reccomendation;
