import React from "react";
import Description from "./Description";
import WorkingHrs from "./WorkingHrs";
import Policies from "./Policies";

function Location() {
  return (
    <div className="details">
      <div className="image-box">
        <div id="location-image" className="location-image"></div>
      </div>
      <Description />
      <WorkingHrs />
      <Policies />
    </div>
  );
}

export default Location;
