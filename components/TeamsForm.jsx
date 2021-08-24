import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Center,
  Flex,
  Text,
  Textarea,
  Spacer,
} from '@chakra-ui/react';

import styles from '../styles/Home.module.css';

export default function TeamsForm({ handleSubmit, teamsSize }) {
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
        <Flex>
          <Button colorScheme="purple" type="submit">
            Crear squads
          </Button>
          {teamsSize > 0 && (
            <>
              <Spacer />
              <Center>
                <Text justifyContent="center" fontSize="sm">
                  {teamsSize} equipos/personas
                </Text>
              </Center>
            </>
          )}{' '}
        </Flex>
      </form>
    </Box>
  );
}

TeamsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  teamsSize: PropTypes.number.isRequired,
};
