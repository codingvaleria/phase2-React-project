import React from "react";

function LocationList() {
  return (
    <div id="menu">
      <div className="menu-inner">
        <h2> Recommendation </h2>
      </div>
      <ul id="locations" className="locations">
        <li className="location">
          <a href="#"> Nairobi Museum </a>
        </li>
        <li className="location">
          <a href="#"> Nairobi National Park</a>
        </li>
        <li className="location">
          <a href="#">Memorial Park </a>
        </li>
      </ul>
    </div>
  );
}

export default LocationList;
