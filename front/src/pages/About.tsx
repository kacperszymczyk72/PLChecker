import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>O projekcie</h1>
        <p className="subtitle">Kompleksowe informacje o drużynach angielskiej Premier League</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <p className="description">
            Premier League Checker to jednostronicowa aplikacja (SPA) napisana w React, która umożliwia
            szybkie przeglądanie informacji o drużynach grających w angielskiej Premier League.
            Aplikacja może działać w trybie online (z wykorzystaniem API-Football) lub offline (na danych statycznych).          </p>
        </section>

        <section className="about-section tech-section">
          <h2>TECHNOLOGIE</h2>
          <ul className="tech-list">
            <li>React 18 + TypeScript</li>
            <li>React Router 6</li>
            <li>API-Football (oficjalne dane piłkarskie)</li>
            <li>Własne pliki CSS + Responsive Design</li>
          </ul>
        </section>

        <section className="about-section features-section">
          <h2>FUNKCJONALNOŚCI</h2>
          <ul className="features-list">
            <li>Przeglądanie listy drużyn w formie kart</li>
            <li>Szczegółowe informacje o każdej drużynie</li>
            <li>Responsywny design dostosowany do różnych urządzeń</li>
            <li>Routing bez przeładowań strony</li>
          </ul>
        </section>

        <section className="about-section sources-section">
          <h2>ŹRÓDŁA DANYCH</h2>
          <p>
            Dane pochodzą z otwartego API: 
            <a href="https://www.api-football.com/" target="_blank" rel="noopener noreferrer">
              API-Football
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;