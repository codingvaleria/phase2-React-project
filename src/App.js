import "./App.css";
import React from "react";
import Home from "./Home";
import AdminForm from "./AdminForm";
import { Route, Routes } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin-form" element={<AdminForm />} />
      </Routes>
    </div>
  );
}

export default App;
