import { useEffect, useState } from 'react';
import { renderToString } from 'react-dom/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { Box, Button, Tooltip } from '@chakra-ui/react';

import markdownizer from '../lib/markdownizer';

// TODO: add tests for code below
const handleCopyToClipboard = async (squadsComponent) => {
  if (navigator.clipboard) {
    try {
      const renderedSquads = renderToString(squadsComponent);
      const textForClipboard = await markdownizer.markdownize(renderedSquads);

      let singleAsteriskBoldText = textForClipboard.replaceAll(/\*{2}/g, '*');
      singleAsteriskBoldText = singleAsteriskBoldText.replaceAll(
        /\n{2}/g,
        '\n'
      );

      navigator.clipboard.writeText(singleAsteriskBoldText);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  }
};

export default function CopyToClipboardButton({ squadsComponent }) {
  const [isClicked, setIsClicked] = useState(false);

  const tooltipLabel = isClicked ? '¡Copiado! ✨' : 'Copiar';

  const handleClick = () => {
    handleCopyToClipboard(squadsComponent);
    setIsClicked(true);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsClicked(false);
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isClicked]);

  return (
    <Box float="right" marginRight={2} marginTop={2}>
      <Tooltip
        label={tooltipLabel}
        fontSize="xs"
        closeOnClick={false}
        placement="top"
        hasArrow
      >
        <Button
          variant="outline"
          colorScheme="purple"
          aria-label="Copy to clipboard"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={solid('copy')} height="20px" />
        </Button>
      </Tooltip>
    </Box>
  );
}
