import Image from 'next/image';
import { Flex, Heading, Text } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';

const esquadLogoSrc = '/squat.png';

export default function EsquadHeader() {
  return (
    <Heading as="h1" size="4xl" pt={2} pb={3} className={styles.title}>
      <Flex alignItems="center">
        <Text as="span">Esquad</Text>
        <Image
          src={esquadLogoSrc}
          alt="Icon of person performing a squat"
          width={64}
          height={64}
        />
      </Flex>
    </Heading>
  );
}
