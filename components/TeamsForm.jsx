import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  Textarea,
  Spacer,
} from '@chakra-ui/react';

export default function TeamsForm({ handleSubmit, teamsSize }) {
  return (
    <Box pb={5}>
      <form onSubmit={handleSubmit}>
        <Box pb={5} width="xl">
          <Textarea
            height="48"
            id="teams"
            placeholder="Pon aquí una línea por equipo o persona"
            required
            aria-required
          />
          <FormControl id="squadAmount" mt={5}>
            <FormControl>Cantidad de squads</FormControl>
            <NumberInput defaultValue={4} size="sm" maxW={20}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
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
