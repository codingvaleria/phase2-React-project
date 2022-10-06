import React from "react";

function WorkingHrs({ workingHours }) {
  return (
    <div className="working-hours-container">
      <h2> Working Hours </h2>
      <div id="working-hours">
        <p> {workingHours} </p>
      </div>
    </div>
  );
}

export default WorkingHrs;
