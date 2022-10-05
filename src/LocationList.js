import React from "react";

function LocationList({ recommendations }) {
  return (
    <div id="menu">
      <div className="menu-inner">
        <h2> Recommendation </h2>
      </div>

      <ul id="locations" className="locations">
        {recommendations.map((recommendation) => {
          return (
            <li className="location" key={recommendation.id}>
              {recommendation.location}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LocationList;
