import React from "react";
import "./Form.css";

function AdminForm() {
  return (
    <React.Fragment>
      <form id="form" className="upload-form">
        <h2 className="title"> Site Update Form </h2>
        <div className="input-field">
          <label for="location">Location:</label>
          <input type="text" id="location" name="location" />
        </div>
        <div className="input-field">
          <label for="imagefield"> Image:</label>
          <input type="text" id="image" name="image" />
        </div>

        <div className="input-field">
          <label for="description"> Description:</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="input-field">
          <label for="entrycharges"> Entry Charges:</label>
          <table className="input-table">
            <tr>
              <th>Type</th>
              <th>Child </th>
              <th>Student</th>
              <th>Adult </th>
            </tr>
            <tr>
              <td> Citizen </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="citizen-child-charge"
                  name="citizen-child-charge"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="citizen-student-charge"
                  name="citizen-student-charge"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="citizen-adult-charge"
                  name="citizen-adult-charge"
                />
              </td>
            </tr>
            <tr>
              <td> Resident</td>
              <td>
                {" "}
                <input
                  type="text"
                  id="resident-child-charge"
                  name="resident-child-charge"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="resident-student-charge"
                  name="resident-student-charge"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="resident-adult-charge"
                  name="resident-adult-charge"
                />
              </td>
            </tr>
            <tr>
              <td>Non- Resident</td>
              <td>
                {" "}
                <input
                  type="text"
                  id="non-resident-child-charge"
                  name="non-resident-child-charge"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="non-resident-student-charge"
                  name="non-resident-student-charge"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="non-resident-adult-charge"
                  name="non-resident-adult-charge"
                />
              </td>
            </tr>
          </table>
        </div>
        <div className="input-field">
          <label for="description"> Working Hours:</label>
          <textarea name="working-hours" id="working-hours" rows="4"></textarea>
        </div>
        <div className="input-field">
          <label for="policies"> Policies: </label>
          <br />
          <input type="text" id="policies" name="policies" />
          <br />
        </div>
        <div className="submit-wrapper">
          <input type="submit" id="submit" value="Submit" />
        </div>
      </form>
    </React.Fragment>
  );
}

export default AdminForm;
