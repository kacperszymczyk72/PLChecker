import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teams from "./Teams";
import About from "./About";
import Contact from "./Contact";
import TeamDetail from "./CardDetail"; 
import logo from "../assets/logo.png";
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
            <Route
              path="/"
              element={
                <>
                  <img src={logo} alt="Logo aplikacji" className="main-logo" />
                  <h1>Witaj w Football Team Checker!</h1>
                  <p className="intro-text">
                    Tutaj możesz sprawdzić informacje o każdej drużynie z Premier League.
                    Przeglądaj statystyki, składy, terminarze spotkań i wiele więcej!
                  </p>
                </>
              }
            />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:id" element={<TeamDetail />} /> {}
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
