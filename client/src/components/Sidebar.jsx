import React from 'react';
import {
  Box,
  VStack,
  Icon,
  Text,
  Link,
  Image,
  Divider,
} from '@chakra-ui/react';
import { FiHome, FiSettings, FiLogOut } from 'react-icons/fi';
import logo from '../images/Black-Logo.png';

import { useSignOut } from 'react-auth-kit';

export const Sidebar = () => {
  const signOut = useSignOut();
  return (
    <Box
      w="200px"
      bg="white"
      color="black"
      p="4"
      minH="100vh"
      alignItems="center"
      gap={2}
    >
      <Link href="/">
        <Image src={logo} height="40px" width={'auto'} mb={5} />
      </Link>
      <VStack spacing="4" align="stretch">
        <Link display="flex" alignItems="center">
          <Icon as={FiHome} mr="2" />
          <Link href="/">Home</Link>
        </Link>
        <Link display="flex" alignItems="center">
          <Icon as={FiSettings} mr="2" />
          <Link href="/Zav">Zav</Link>
        </Link>
        <Divider />
        <Link display="flex" alignItems="center">
          <Icon as={FiLogOut} mr="2" />
          <Text onClick={() => signOut()}>Logout</Text>
        </Link>
      </VStack>
    </Box>
  );
};
