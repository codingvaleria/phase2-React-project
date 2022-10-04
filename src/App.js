import logo from "./logo.svg";
import "./App.css";
import "./Form.css";
import React from "react";
import NavBar from "./NavBar";
import Reccomendation from "./Reccomendation";
import AdminForm from "./AdminForm";

function App() {
  return (
    <div>
      <NavBar />
      {/* <Reccomendation /> */}
      <AdminForm />
    </div>
  );
}

export default App;
