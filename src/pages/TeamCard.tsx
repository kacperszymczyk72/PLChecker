import React from "react";
import { Link } from "react-router-dom";
import "./TeamCard.css";

type TeamProps = {
  id: number;
  name: string;
  logo: string;
};

function TeamCard({ id, name, logo }: TeamProps) {
  return (
    <Link to={`/teams/${id}`} className="team-link">
      <div className="team-card">
        <div className="logo-container">
          <img src={logo} alt={name} className="team-logo" />
        </div>
        <div className="team-info">
          <h2 className="team-name">{name}</h2>
        </div>
      </div>
    </Link>
  );
}

export default TeamCard;