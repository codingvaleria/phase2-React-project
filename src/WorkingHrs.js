import React from "react";
import Charges from "./Charges ";

function WorkingHrs() {
  return (
    <div className="working-hours-container">
      <h2> Working Hours </h2>
      <div id="working-hours">
        <p>Contact Number: 0709907411 </p>
        <p>
          Working Hours: Monday-Sunday including public holidays,from 08:00 am -
          05:00 pm{" "}
        </p>
      </div>
      <Charges />
    </div>
  );
}

export default WorkingHrs;
