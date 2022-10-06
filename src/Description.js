import React from "react";

function Description({ description }) {
  return (
    <React.Fragment>
      <h1 id="title">{title}</h1>
      <div id="description-container" className="description-container">
        {description}
      </div>
    </React.Fragment>
  );
}

export default Description;
