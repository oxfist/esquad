import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Home.module.css';

export default function TeamsForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="teams">
          Equipos (duplas/tríos/persona)
          <div>
            <textarea
              id="teams"
              className={styles.textInput}
              required
              aria-required
            />
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
