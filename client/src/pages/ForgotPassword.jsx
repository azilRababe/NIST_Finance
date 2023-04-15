import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

import { UseDisplayToast } from '../utils/UseDisplayToast';

export const ForgotPassword = () => {
  const displayToast = UseDisplayToast();

  const [email, setEmail] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('/auth/forget_password', email)
      .then(res => displayToast('Check Your Mail', res.data.msg, 'success'))
      .catch(err =>
        displayToast('Ops! Something went wrong', err?.data?.err, 'error')
      );
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Forgot your password?
        </Heading>
        <Text
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}
        >
          You&apos;ll get an email with a reset link
        </Text>
        <FormControl id="email">
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
            onChange={e => setEmail({ email: e.target.value })}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            onClick={handleSubmit}
          >
            Request Reset
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};
