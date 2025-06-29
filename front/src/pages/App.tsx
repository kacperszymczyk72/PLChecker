import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Teams from "./Teams";
import About from "./About";
import Contact from "./Contact";
import logo from "../assets/logo.svg"
import "./App.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <h1>Witaj w Football Team Checker</h1>
                <p className="intro-text">
                  Tutaj możesz sprawdzić informacje o każdej drużynie z Premier League.
                  Przeglądaj statystyki, skład, terminarz spotkań i wiele więcej!
                </p>
              </>
            } />
            <Route path="/teams" element={<Teams />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
