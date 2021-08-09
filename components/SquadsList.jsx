import React from 'react';
import PropTypes from 'prop-types';

export default function SquadsList({ squads }) {
  if (squads.length === 0) return <></>;

  return (
    <ul>
      {squads.map((squad) => (
        <li key={squad.name}>
          <strong>{squad.name}</strong>
        </li>
      ))}
    </ul>
  );
}

SquadsList.propTypes = {
  squads: PropTypes.arrayOf(PropTypes.object).isRequired,
};
