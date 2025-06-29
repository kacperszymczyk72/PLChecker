import React from "react";
import { Link } from "react-router-dom";
import "./TeamCard.css";

type TeamProps = {
  id: number;
  name: string;
  logo: string;
  stadium: string;
  city: string;
};

function TeamCard({ id, name, logo, stadium, city }: TeamProps) {
  return (
    <Link to={`/teams/${id}`} className="team-link">
      <div className="team-card">
        <img src={logo} alt={name} className="team-logo" />
        <h2>{name}</h2>
        <p><strong>Stadion:</strong> {stadium}</p>
        <p><strong>Miasto:</strong> {city}</p>
      </div>
    </Link>
  );
}

export default TeamCard;
