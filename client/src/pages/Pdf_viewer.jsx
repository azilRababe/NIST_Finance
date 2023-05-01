import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Card, Flex, Grid, GridItem } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';

export const Pdf_viewer = () => {
  const location = useLocation();
  return (
    <>
      <Flex>
        <form action="api/generate_PDF" method="post">
          <button type="submit">Download</button>
        </form>
      </Flex>
    </>
  );
};
