import React from "react";

function Charges({ entryCharges }) {
  const nationalities = ["citizen", "resident", "non-resident"];
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
          {nationalities.map((nationality) => {
            return (
              <tr key={nationality}>
                <td>{nationality}</td>
                {ageGroups.map((age) => {
                  return (
                    <td key={age}>
                      {entryCharges[`${nationality}-${age}-charge`]}
                    </td>
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
