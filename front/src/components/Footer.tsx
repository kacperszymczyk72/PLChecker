import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Premier League Checker</p>
    </footer>
  );
}

export default Footer;
