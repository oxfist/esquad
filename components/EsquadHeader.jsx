import Image from 'next/image';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

const esquadLogoSrc = '/squat.png';

export default function EsquadHeader() {
  return (
    <Heading as="h1" size="4xl" pt={2} pb={3} className={styles.title}>
      <Flex alignItems="center">
        <Text as="span" className={styles.esquadTitle}>
          Esquad
        </Text>
        <motion.div
          whileHover={{ scale: 1.1, rotateZ: 5 }}
          whileTap={{ scale: 0.9, x: 5, y: 5, rotateZ: -5 }}
        >
          <Image
            src={esquadLogoSrc}
            alt="Icon of person performing a squat"
            width={64}
            height={64}
          />
        </motion.div>
      </Flex>
    </Heading>
  );
}
