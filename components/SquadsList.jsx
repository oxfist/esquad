import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

export default function SquadsList({ squads }) {
  return (
    <Box height="md" width="md" overflowY="scroll" background="lightgray">
      {squads.map((squad) => (
        <Box p={3} className="squadGroup" key={squad.name}>
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
        </Box>
      ))}
    </Box>
  );
}

SquadsList.propTypes = {
  squads: PropTypes.arrayOf(PropTypes.object).isRequired,
};
