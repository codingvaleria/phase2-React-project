import React from "react";

function Policies({ policies }) {
  return (
    <div className="policy-container">
      <h2> Policies </h2>
      <ul id="policy-list">
        {policies.split("\n").map((policy) => {
          return <li key={policy}> {policy} </li>;
        })}
      </ul>
    </div>
  );
}

export default Policies;
