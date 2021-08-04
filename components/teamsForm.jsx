import React from 'react';
import PropTypes from 'prop-types';

export default function TeamsForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="teams">
          Equipos (duplas/tríos/persona)
          <div>
            <textarea id="teams" rows="20" cols="75" required aria-required />
          </div>
        </label>
      </div>
      <div>
        <button type="submit">Formar squads</button>
      </div>
    </form>
  );
}

TeamsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
