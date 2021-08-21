import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from '@chakra-ui/react';

import styles from '../styles/Home.module.css';

export default function TeamsForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Text htmlFor="teams" fontSize="sm">
          Pon aquí una línea por cada equipo o persona:
          <div>
            <textarea
              id="teams"
              className={styles.textInput}
              required
              aria-required
            />
          </div>
        </Text>
      </div>
      <div>
        <Button colorScheme="blackAlpha" type="submit">
          Crear squads
        </Button>
      </div>
    </form>
  );
}

TeamsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
