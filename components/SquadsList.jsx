import React from 'react';
import PropTypes from 'prop-types';

export default function SquadsList({ squads }) {
  if (squads.length === 0) return <></>;

  return (
    <div>
      {squads.map((squad) => (
        <div className="squadGroup" key={squad.name}>
          <span className="squadName" key={squad.name}>
            <strong>{squad.name}:</strong>
          </span>
          <div className="teamsGroup">
            {squad.teams.map((team) => (
              <div className="singleTeam" key={team}>
                <span key={team}>{team}</span>
                <br />
              </div>
            ))}
          </div>
          <div>
            <strong>Capitana: {squad.captain}</strong>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}

SquadsList.propTypes = {
  squads: PropTypes.arrayOf(PropTypes.object).isRequired,
};
