import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

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
      <Box flex="1" p="5" bg="gray.100">
        {/* Content goes here */}
        <Flex fontSize="xl" justifyContent="start" alignItems="center">
          {`${Greeting()} ${currentUser.firstname}`}
        </Flex>

        {/* <Box bg="white" p="2" borderRadius="md" boxShadow="md"> */}
        <DisplayData />
        {/* </Box> */}
      </Box>
      <Box
        as="footer"
        py="2"
        // bg="gray.200"
        // color="gray.600"
        position="fixed"
        bottom="0"
        left="0"
        width="100%"
        textAlign="center"
      >
        <Text textTransform={'capitalize'} size="sm">
          {currentUser.role}
        </Text>
      </Box>
    </Flex>
  );
};
