import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Football Team Checker</p>
    </footer>
  );
}

export default Footer;
