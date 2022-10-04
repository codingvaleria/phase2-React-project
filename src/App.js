import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <div class="header-wrapper">
        <header> ZuruKenya</header>
        <a href="./about.html" class="header-link">
          {" "}
          About Us
        </a>
      </div>

      <div id="body-details">
        <div id="menu">
          <div class="menu-inner">
            <h2> Recommendation </h2>
          </div>
          <ul id="locations" class="locations">
            <li class="location">
              <a href="#"> Nairobi Museum </a>
            </li>
            <li class="location">
              <a href="#"> Nairobi National Park</a>
            </li>
            <li class="location">
              <a href="#">Memorial Park </a>
            </li>
          </ul>
        </div>

        <div class="details">
          <div class="image-box">
            <div id="location-image" class="location-image"></div>
          </div>

          <h1 id="title"></h1>
          <div id="description-container" class="description-container"></div>
          <div class="working-hours-container">
            <h2> Working Hours </h2>
            <div id="working-hours">
              <p>Contact Number: 0709907411 </p>
              <p>
                Working Hours: Monday-Sunday including public holidays,from
                08:00 am - 05:00 pm{" "}
              </p>
            </div>

            <div class="charges">
              <h2>
                {" "}
                Entry Charges <span class="Ksh">(price in Ksh) </span>
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
          </div>

          <div class="policy-container">
            <h2> Policies </h2>
            <ul id="policy-list">
              <li>Strictly no cash payments </li>
              <li> Photography charges apply </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
