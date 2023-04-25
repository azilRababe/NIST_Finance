import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/react';

export const Pdf_viewer = () => {
  const location = useLocation();
  return (
    <>
      <Box>
        {location.state && (
          <embed
            src={location.state.pdfDataUrl}
            type="application/pdf"
            width="100%"
            height="800px"
          />
        )}
      </Box>
    </>
  );
};
