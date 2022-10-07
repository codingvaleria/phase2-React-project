import React, { useEffect, useState } from "react";
import LocationList from "./LocationList";
import Location from "./Location";
import NavBar from "./NavBar";

function Home() {
  const [recommendations, setReccomendations] = useState([]);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetch("https://zurukenya.herokuapp.com/recommendations")
      .then((r) => r.json())
      .then((recommendations) => {
        setReccomendations(recommendations);
        setLocation(recommendations[0]);
      });
  }, []);

  return (
    <React.Fragment>
      <NavBar href="/about" text="About Us" />
      <div id="body-details">
        <LocationList
          recommendations={recommendations}
          setLocation={setLocation}
        />
        <Location location={location} />
      </div>
    </React.Fragment>
  );
}

export default Home;
