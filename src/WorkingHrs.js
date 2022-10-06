import React from "react";
import Charges from "./Charges ";

function WorkingHrs({ workingHrs }) {
  return (
    <div className="working-hours-container">
      <h2> Working Hours </h2>
      <div id="working-hours">
        <p> {workingHrs} </p>
      </div>
      <Charges />
    </div>
  );
}

export default WorkingHrs;
