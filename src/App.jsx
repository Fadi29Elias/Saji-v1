import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/NavbarComponent/Navbar";
import Home from "./Components/HomeComponenit/Home";
import Location from "./Components/LocationComponent/Location";
import "../src/App.css";
import Contact from "./Components/ContactComponent/Contact";
import './i18n';
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Home />
      </div>
      <Location />
      <Contact/>
    </Router>
  );
}

export default App;
