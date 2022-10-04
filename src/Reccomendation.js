import React from "react";
import LocationList from "./LocationList";
import Location from "./Location";

function Reccomendation() {
  return (
    <React.Fragment>
      <div id="body-details">
        <LocationList />
        <Location />
      </div>
    </React.Fragment>
  );
}

export default Reccomendation;
