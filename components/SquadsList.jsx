import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

import CopyToClipboardButton from './CopyToClipboardButton';

function Squads({ data }) {
  return data.map((squad) => <Squad key={squad.name} squadData={squad} />);
}

export function Squad({ squadData }) {
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
      {squads.length > 0 && (
        <CopyToClipboardButton squadsComponent={<Squads data={squads} />} />
      )}
      <Squads data={squads} />
    </Box>
  );
}

SquadsList.propTypes = {
  squads: PropTypes.arrayOf(PropTypes.object).isRequired,
};
