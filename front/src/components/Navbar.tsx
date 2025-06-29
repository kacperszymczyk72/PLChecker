import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo biale.png"

function Navbar() {
  return (
    <nav className="navbar">
    <div className="logo-container">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
    </div>
      <ul className="nav-links">
        <li><Link to="/">Strona główna</Link></li>
        <li><Link to="/teams">Drużyny</Link></li>
        <li><Link to="/about">O projekcie</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
