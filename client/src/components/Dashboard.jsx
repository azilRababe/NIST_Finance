import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { DisplayData } from '../components/DisplayData';
import { useAuthUser } from 'react-auth-kit';
import { BiHappyBeaming } from 'react-icons/bi';
import { Greeting } from '../utils/Greeting';
import { Sidebar } from './Sidebar';
export const Dashboard = () => {
  const auth = useAuthUser();
  const currentUser = auth().user;

  return (
    <Flex>
      <Sidebar />

      {/* Main Content */}
      <Box flex="1" p="8" bg="gray.100">
        {/* Content goes here */}
        <Flex fontSize="xl" mb="4" justifyContent="center" alignItems="center">
          {`${Greeting()} ${currentUser.firstname}`} Nice To See Ya
          <BiHappyBeaming />
        </Flex>

        <Box bg="white" p="2" borderRadius="md" boxShadow="md">
          <DisplayData />
        </Box>
      </Box>
    </Flex>
  );
};
