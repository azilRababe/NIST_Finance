import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Center,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from 'react-auth-kit';

import axios from 'axios';

import { UseDisplayToast } from '../utils/UseDisplayToast';

export const Login = () => {
  const displayToast = UseDisplayToast();

  const navigate = useNavigate();
  const signIn = useSignIn();
  const [user, setUser] = useState({ email: '', password: '' });

  // handleSubmit
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('auth/login', user)
      .then(res => {
        if (
          signIn({
            token: res.data.accessToken,
            token: res.data.accessToken,
            expiresIn: 60,
            tokenType: 'Bearer',
            authState: { user: res.data.user },
          })
        )
          return navigate('/');
      })
      .catch(err =>
        displayToast('Ops! Something went wrong', err?.data?.err, 'error')
      );
  };
  // main
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              onChange={e => setUser({ ...user, email: e.target.value })}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={e => setUser({ ...user, password: e.target.value })}
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
              <Link href="/ForgotPassword" color={'blue.500'}>
                Forgot password?
              </Link>
            </Stack>
            <Button
              colorScheme={'blue'}
              variant={'solid'}
              onClick={handleSubmit}
            >
              Sign in
            </Button>
            <Center>
              Don't have an account ?
              <Link href="/register" color={'blue.500'} ml="2">
                Sign up
              </Link>
            </Center>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  );
};
