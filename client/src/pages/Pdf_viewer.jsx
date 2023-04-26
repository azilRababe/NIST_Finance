import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Grid, GridItem } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';

export const Pdf_viewer = () => {
  const location = useLocation();
  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav main"`}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'150px fr'}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" area={'header'}>
          <Navbar />
        </GridItem>

        <GridItem pl="2" mt="5" area={'nav'}>
          Sidebar
        </GridItem>
        <GridItem pl="2" mt="5" area={'main'}>
          {location.state && (
            <embed
              src={location.state.pdfDataUrl}
              type="application/pdf"
              width="100%"
              height="700px"
            />
          )}
        </GridItem>
        {/* <GridItem pl="2" bg="blue.300" area={'footer'}>
          Footer
        </GridItem> */}
      </Grid>
    </>
  );
};
