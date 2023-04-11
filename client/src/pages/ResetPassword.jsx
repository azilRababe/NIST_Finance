import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const ResetPassword = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const resetToken = searchParams.get('resetToken');

  const [password, setPassword] = useState(null);
  // const [confirmation, setConfirmation] = useState(null);

  const handleClick = e => {
    e.preventDefault();
    // password === confirmation
    axios
      .post(`auth/reset_password?resetToken=${resetToken}`, password)
      .then(() => console.log('Password changed successfully'))
      .catch(err => console.log(err));
    // : console.log('The passwords you entered do not match. Please try again');
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
          Enter new password
        </Heading>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            onChange={e => setPassword({ password: e.target.value })}
          />
        </FormControl>

        {/* <FormControl id="confirmation" isRequired>
          <FormLabel>Confirm Your Password</FormLabel>
          <Input
            name="confirmation"
            type="password"
            // onChange={e => setConfirmation(e.target.value)}
          />
        </FormControl> */}

        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            onClick={handleClick}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};
