import Image from 'next/image';
import { Heading } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';

const esquadLogoSrc = '/squat.png';

export default function EsquadHeader() {
  return (
    <Heading as="h1" size="4xl" className={styles.title}>
      <span>Esquad</span>
      <Image
        src={esquadLogoSrc}
        alt="Icon of person performing a squat"
        width={64}
        height={64}
      />
    </Heading>
  );
}
