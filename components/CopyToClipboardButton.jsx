import { useState } from 'react';
import { renderToString } from 'react-dom/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import TurndownService from 'turndown';

import { Box, Button, Tooltip } from '@chakra-ui/react';

const renderedElementToMarkdown = async (elements) => {
  const turndownService = new TurndownService();
  const markdown = turndownService.turndown(elements);
  return markdown;
};

const handleCopyToClipboard = async (squadsComponent) => {
  if (navigator.clipboard) {
    try {
      const renderedSquads = renderToString(squadsComponent);
      const textForClipboard = await renderedElementToMarkdown(renderedSquads);

      const singleAsteriskBoldText = textForClipboard.replaceAll(/\*{2}/g, '*');

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
    setTimeout(() => {
      setIsClicked(false);
    }, 4000);
  };

  return (
    <Box float="right" marginRight={2} marginTop={2}>
      <Tooltip
        label={tooltipLabel}
        fontSize="xs"
        closeOnClick={false}
        placement="top"
        closeDelay={2000}
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
