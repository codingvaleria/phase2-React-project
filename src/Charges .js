import React from "react";

function Charges() {
  return (
    <React.Fragment>
      <div className="charges">
        <h2>
          {" "}
          Entry Charges <span className="Ksh">(price in Ksh) </span>
        </h2>
        <table>
          <tr>
            <th>Type</th>
            <th>Child </th>
            <th>Student</th>
            <th>Adult </th>
          </tr>
          <tr>
            <td> Citizen </td>
            <td id="citizen-child-charge"> 200 </td>
            <td id="citizen-student-charge"> 100</td>
            <td id="citizen-adult-charge"> 100</td>
          </tr>
          <tr>
            <td> Resident</td>
            <td id="resident-child-charge"> 200 </td>
            <td id="resident-student-charge"> 100</td>
            <td id="resident-adult-charge"> 100</td>
          </tr>
          <tr>
            <td>Non- Resident</td>
            <td id="non-resident-child-charge"> 200 </td>
            <td id="non-resident-student-charge"> 100</td>
            <td id="non-resident-adult-charge"> 100</td>
          </tr>
        </table>
      </div>
    </React.Fragment>
  );
}
export default Charges;
