import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Textarea } from '@chakra-ui/react';

import styles from '../styles/Home.module.css';

export default function TeamsForm({ handleSubmit }) {
  return (
    <Box pb={5}>
      <form onSubmit={handleSubmit}>
        <Box pb={5}>
          <Textarea
            width="xl"
            height="48"
            id="teams"
            className={styles.textInput}
            placeholder="Pon aquí una línea por equipo o persona"
            required
            aria-required
          />
        </Box>
        <Button colorScheme="purple" type="submit">
          Crear squads
        </Button>
      </form>
    </Box>
  );
}

TeamsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
