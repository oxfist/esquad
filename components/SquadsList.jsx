import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

export default function SquadsList({ squads }) {
  if (squads.length === 0) return <></>;

  return (
    <Box maxHeight="80" width="md" overflowY="scroll">
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
    </Box>
  );
}

SquadsList.propTypes = {
  squads: PropTypes.arrayOf(PropTypes.object).isRequired,
};
