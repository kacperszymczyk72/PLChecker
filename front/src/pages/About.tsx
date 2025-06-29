import React from "react";
import "./About.css"; // jeśli chcesz osobny styl

function About() {
  return (
    <div className="about-page">
      <h1>O projekcie</h1>
      <p>
        Ten projekt pozwala sprawdzać informacje o drużynach z angielskiej Premier League
        za pomocą API-Football. Możesz przeglądać listę drużyn, ich szczegóły,
        a w przyszłości może także statystyki meczów i zawodników.
      </p>
      <p>
        Stworzony w React + TypeScript, z responsywnym layoutem i dynamicznym pobieraniem danych z zewnętrznego API.
      </p>
    </div>
  );
}

export default About;
