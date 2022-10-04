import React from "react";
import Description from "./Description";
import WorkingHrs from "./WorkingHrs";
import Policies from "./Policies";

function Location() {
  return (
    <React.Fragment>
      <div className="details">
        <div className="image-box">
          <div id="location-image" className="location-image"></div>
        </div>
        <Description />
        <WorkingHrs />
        <Policies />
      </div>
    </React.Fragment>
  );
}

export default Location;
