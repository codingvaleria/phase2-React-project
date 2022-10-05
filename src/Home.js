import React from "react";
import LocationList from "./LocationList";
import Location from "./Location";
import NavBar from "./NavBar";

function Home() {
  return (
    <React.Fragment>
      <NavBar href="/about" text="About Us" />
      <div id="body-details">
        <LocationList />
        <Location />
      </div>
    </React.Fragment>
  );
}

export default Home;
