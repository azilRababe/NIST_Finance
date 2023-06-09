import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

import { UseDisplayToast } from '../utils/UseDisplayToast';

import axios from 'axios';

export const Register = () => {
  const displayToast = UseDisplayToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  // HandleSbmit
  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post(`auth/register`, user)
      .then(res => {
        displayToast('Registration Successful', res.data.msg, 'success');
        navigate('/');
      })
      .catch(err => {
        displayToast('Ops! Something went wrong', err?.data?.err, 'error');
      });
  };

  // main
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Register
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    name="firstname"
                    onChange={e =>
                      setUser({ ...user, firstname: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    name="lastname"
                    onChange={e =>
                      setUser({ ...user, lastname: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={e => setUser({ ...user, email: e.target.value })}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Role</FormLabel>
              <Select
                placeholder="Select option"
                name="role"
                onChange={e => setUser({ ...user, role: e.target.value })}
              >
                <option value="admin">admin</option>
                <option value="moderator">moderator</option>
                <option value="user">user</option>
              </Select>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  onChange={e => setUser({ ...user, password: e.target.value })}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword(showPassword => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
