import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import logo from '../images/logo.png';
import { useSignOut } from 'react-auth-kit';

const NavLink = props => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    fontWeight={'bold'}
    color={useColorModeValue('gray.700', 'gray.200')}
    _hover={{
      textDecoration: 'none',
      color: useColorModeValue('blue.500', 'blue.200'),
      bgColor: useColorModeValue('gray.200', 'gray.700'),
    }}
    {...props}
  />
);

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const signOut = useSignOut();
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
      marginBottom="1.5"
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Link href="/">
            <Image src={logo} height="35px" />
          </Link>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <NavLink href="/#">Dashboard</NavLink>
            <NavLink href="/zav">Zav</NavLink>
            <NavLink href="#">Web</NavLink>
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Button
            variant={'solid'}
            colorScheme={'blue'}
            size={'sm'}
            fontWeight={'bold'}
            onClick={() => signOut()}
          >
            Sign Out
          </Button>
        </Flex>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <NavLink href="/#">Dashboard</NavLink>
            <NavLink href="/zav">Zav</NavLink>
            <NavLink href="#">Web</NavLink>
          </Stack>
        </Box>
      )}
    </Box>
  );
};
