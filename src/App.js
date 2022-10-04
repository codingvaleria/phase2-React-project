import logo from "./logo.svg";
import "./App.css";
import React from "react";
import NavBar from "./NavBar";
import Reccomendation from "./Reccomendation";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Reccomendation />
    </React.Fragment>
  );
}

export default App;
