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
import { FiHome, FiLogOut } from 'react-icons/fi';
import { AiOutlineForm } from 'react-icons/ai';
import logo from '../images/Black-Logo.png';

import { useSignOut, useAuthUser } from 'react-auth-kit';

export const Sidebar = () => {
  const signOut = useSignOut();
  const auth = useAuthUser();
  const currentUser = auth().user;
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
        <Image src={logo} width="auto" mb={5} align={'center'} />
      </Link>

      <VStack spacing="4" align="stretch">
        <Link display="flex" alignItems="center">
          <Icon as={FiHome} mr="2" />
          <Link href="/">Home</Link>
        </Link>
        <Link display="flex" alignItems="center">
          <Icon as={AiOutlineForm} mr="2" />
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
