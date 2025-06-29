/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./TeamDetail.css";

function TeamDetail() {
  const { id } = useParams();
  const [team, setTeam] = useState<any>(null);

  useEffect(() => {
    fetch(`https://v3.football.api-sports.io/teams?id=${id}`, {
      headers: {
        "x-apisports-key": "8325392c83dc4026c95011424959cce7"
      }
    })
      .then(res => res.json())
      .then(data => {
        setTeam(data.response[0]);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!team) return <p>Ładowanie...</p>;

  return (
    <div className="team-detail">
      <h1>{team.team.name}</h1>
      <img src={team.team.logo} alt={team.team.name} className="team-detail-logo" />
      <p><strong>Rok założenia:</strong> {team.team.founded}</p>
      <p><strong>Stadion:</strong> {team.venue.name}</p>
      <p><strong>Miasto:</strong> {team.venue.city}</p>
      <p><strong>Pojemność stadionu:</strong> {team.venue.capacity}</p>
    </div>
  );
}

export default TeamDetail;*/

import React from "react";
import { useParams } from "react-router-dom";
import "./TeamDetail.css";

function TeamDetail() {
  const { id } = useParams();

  return (
    <div className="team-detail">
      <h1>Podgląd drużyny</h1>
      <p>To jest podstrona szczegółowa dla drużyny o ID: {id}</p>
      <p>Wersja demonstracyjna — bez pobierania danych z API.</p>
    </div>
  );
}

export default TeamDetail;



