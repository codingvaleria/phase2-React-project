import React, { useState } from "react";
import "./Form.css";

const defaultLocationDetails = {
  location: "",
  image: "",
  workingHours: "",
  description: "",
  policies: "",
};

const defaultChargesDetails = {
  "citizen-child-charge": "",
  "citizen-student-charge": "",
  "citizen-adult-charge": "",
  "resident-child-charge": " ",
  "resident-student-charge": "",
  "resident-adult-charge": "",
  "non-resident-child-charge": "",
  "non-resident-student-charge": "",
  "non-resident-adult-charge": "",
};

function AdminForm() {
  const [locationDetails, setLocationDetails] = useState(
    defaultLocationDetails
  );
  const [charges, setCharges] = useState(defaultChargesDetails);

  function handleChangeOnCharge(e) {
    const value = e.target.value;
    const name = e.target.name;
    setCharges({
      ...charges,
      [name]: value,
    });
  }

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setLocationDetails({
      ...locationDetails,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://zuru-kenya-backend-8c85.onrender.com/recommendations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...locationDetails,
        entryCharges: charges,
      }),
    })
      .then((r) => r.json())
      .then(() => {
        setLocationDetails(defaultLocationDetails);
        setCharges(defaultChargesDetails);
      });
  }

  return (
    <div className="upload-form-wrapper">
      <form onSubmit={handleSubmit} id="form" className="upload-form">
        <h2 className="title"> Site Update Form </h2>
        <div className="input-field">
          <label>Location:</label>
          <input
            onChange={handleChange}
            value={locationDetails.location}
            type="text"
            id="location"
            name="location"
          />
        </div>
        <div className="input-field">
          <label> Image:</label>
          <input
            onChange={handleChange}
            value={locationDetails.image}
            type="text"
            id="image"
            name="image"
          />
        </div>

        <div className="input-field">
          <label> Description:</label>
          <textarea
            onChange={handleChange}
            value={locationDetails.description}
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="input-field">
          <label> Entry Charges:</label>
          <table className="input-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Child </th>
                <th>Student</th>
                <th>Adult </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> Citizen </td>
                <td>
                  {" "}
                  <input
                    onChange={handleChangeOnCharge}
                    value={charges["citizen-child-charge"]}
                    type="text"
                    id="citizen-child-charge"
                    name="citizen-child-charge"
                  />
                </td>
                <td>
                  <input
                    onChange={handleChangeOnCharge}
                    value={charges["citizen-student-charge"]}
                    type="text"
                    id="citizen-student-charge"
                    name="citizen-student-charge"
                  />
                </td>
                <td>
                  {" "}
                  <input
                    onChange={handleChangeOnCharge}
                    value={charges["citizen-adult-charge"]}
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
                    onChange={handleChangeOnCharge}
                    value={charges["resident-child-charge"]}
                    type="text"
                    id="resident-child-charge"
                    name="resident-child-charge"
                  />
                </td>
                <td>
                  {" "}
                  <input
                    onChange={handleChangeOnCharge}
                    value={charges["resident-student-charge"]}
                    type="text"
                    id="resident-student-charge"
                    name="resident-student-charge"
                  />
                </td>
                <td>
                  {" "}
                  <input
                    onChange={handleChangeOnCharge}
                    value={charges["resident-adult-charge"]}
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
                    onChange={handleChangeOnCharge}
                    value={charges["non-resident-child-charge"]}
                    type="text"
                    id="non-resident-child-charge"
                    name="non-resident-child-charge"
                  />
                </td>
                <td>
                  {" "}
                  <input
                    onChange={handleChangeOnCharge}
                    value={charges["non-resident-student-charge"]}
                    type="text"
                    id="non-resident-student-charge"
                    name="non-resident-student-charge"
                  />
                </td>
                <td>
                  {" "}
                  <input
                    onChange={handleChangeOnCharge}
                    value={charges["non-resident-adult-charge"]}
                    type="text"
                    id="non-resident-adult-charge"
                    name="non-resident-adult-charge"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="input-field">
          <label> Working Hours:</label>
          <textarea
            onChange={handleChange}
            value={locationDetails.workingHours}
            name="workingHours"
            id="working-hours"
            rows="4"
          ></textarea>
        </div>
        <div className="input-field">
          <label> Policies: </label>
          <br />
          <input
            onChange={handleChange}
            value={locationDetails.policies}
            type="text"
            id="policies"
            name="policies"
          />
          <br />
        </div>
        <div className="submit-wrapper">
          <input type="submit" id="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default AdminForm;
