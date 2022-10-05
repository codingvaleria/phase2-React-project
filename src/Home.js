import React, { useEffect, useState } from "react";
import LocationList from "./LocationList";
import Location from "./Location";
import NavBar from "./NavBar";

function Home() {
  const [recommendations, setReccomendations] = useState([]);
  // const [listedLocations, setListedLocations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/recommendations")
      .then((r) => r.json())
      .then((recommendations) => setReccomendations(recommendations));
  }, []);

  return (
    <React.Fragment>
      <NavBar href="/about" text="About Us" />
      <div id="body-details">
        <LocationList recommendations={recommendations} />
        <Location />
      </div>
    </React.Fragment>
  );
}

export default Home;
