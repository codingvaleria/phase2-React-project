import React, { useEffect, useState } from "react";
import LocationList from "./LocationList";
import Location from "./Location";
import NavBar from "./NavBar";
import ScaleLoader from "react-spinners/ScaleLoader";

function Home() {
  const [recommendations, setReccomendations] = useState([]);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const override = { display: "block", margin: "0 auto", bordercolor: "red" };

  useEffect(() => {
    fetch("https://zuru-kenya-backend-8c85.onrender.com/recommendations")
      .then((r) => r.json())
      .then((recommendations) => {
        setReccomendations(recommendations);
        setLocation(recommendations[0]);
        setLoading(false);
      });
  }, []);
  console.log(loading);

  return (
    <React.Fragment>
      <NavBar href="/about" text="About Us" />
      {loading ? (
        <div
          className="ring-loader"
          style={{
            minHeight: "100vh",
            display: "grid",
            placeContent: "center",
          }}
        >
          <ScaleLoader
            size={250}
            color={"#9bb796"}
            loading={loading}
            override={override}
            style={{ display: "block", margin: "0 auto", bordercolor: "red" }}
          />
        </div>
      ) : (
        <>
          <div id="body-details">
            <LocationList
              recommendations={recommendations}
              setLocation={setLocation}
            />
            <Location location={location} />
          </div>
        </>
      )}
    </React.Fragment>
  );
}

export default Home;
