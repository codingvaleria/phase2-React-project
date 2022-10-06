import React from "react";

function Charges({ entryCharges }) {
  const persons = ["citizen", "resident", "non-resident"];
  const ageGroups = ["child", "student", "adult"];
  return (
    <div className="charges">
      <h2>
        Entry Charges <span className="Ksh">(price in Ksh) </span>
      </h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Child </th>
            <th>Student</th>
            <th>Adult </th>
          </tr>
        </thead>

        <tbody>
          {persons.map((person) => {
            return (
              <tr key={person}>
                <td>{person}</td>
                {ageGroups.map((age) => {
                  return (
                    <td key={age}>{entryCharges[`${person}-${age}-charge`]}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Charges;
