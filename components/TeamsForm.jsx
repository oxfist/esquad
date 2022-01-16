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

export default function TeamsForm({ handleSubmit, teamsSize, isGenerating }) {
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box width="xl">
          <Textarea
            height="80"
            id="teams"
            placeholder="Pon aquí una línea por equipo o persona"
            required
            aria-required
          />
          <FormControl id="squadAmount" mt={3}>
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
        <Flex pt={5}>
          <Button colorScheme="purple" type="submit" isLoading={isGenerating}>
            Generar squads
          </Button>
          {teamsSize > 0 && (
            <>
              <Spacer />
              <Center>
                <Text fontSize="sm">{teamsSize} equipos/personas</Text>
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
