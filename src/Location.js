import React, { useState, useEffect } from "react";
import Description from "./Description";
import WorkingHrs from "./WorkingHrs";
import Policies from "./Policies";
import Charges from "./Charges ";

function Location({ location }) {
  if (!location) {
    return null;
  }

  return (
    <div className="details">
      <div className="image-box">
        <div
          id="location-image"
          style={{
            backgroundImage: `url(${location.image})`,
          }}
          className="location-image"
        ></div>
      </div>
      <Description
        title={location.location}
        description={location.description}
      />
      <WorkingHrs workingHours={location.workingHours} />
      <Policies policies={location.policies} />
      <Charges entryCharges={location.entryCharges} />
    </div>
  );
}

export default Location;
