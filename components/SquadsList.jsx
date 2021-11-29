import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function Squad({ squadData }) {
  return (
    <Box p={3} className="squadGroup">
      <span className="squadName">
        <strong>{squadData.name}:</strong>
      </span>
      <div className="teamsGroup">
        {squadData.teams.map((team) => (
          <div className="singleTeam" key={team}>
            <span key={team}>{team}</span>
            <br />
          </div>
        ))}
      </div>
      <div>
        <strong>Capitana: {squadData.captain}</strong>
      </div>
      <br />
    </Box>
  );
}

export default function SquadsList({ squads }) {
  return (
    <Box
      height="md"
      width="md"
      overflowY={squads.length > 0 ? 'scroll' : 'clip'}
      background="#f6f6f6"
    >
      <Box>
        <FontAwesomeIcon icon={solid('copy')} size="sm" />
      </Box>
      {squads.map((squad) => (
        <Squad key={squad.name} squadData={squad} />
      ))}
    </Box>
  );
}

SquadsList.propTypes = {
  squads: PropTypes.arrayOf(PropTypes.object).isRequired,
};
