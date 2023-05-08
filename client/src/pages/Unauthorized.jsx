import { Box, Heading, Text, Button, Link } from '@chakra-ui/react';

export const Unauthorized = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, red.400, red.600)"
        backgroundClip="text"
      >
        401
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Unauthorized
      </Text>
      <Text color={'gray.500'} mb={6}>
        You do not have permission to access this resource. Please contact the
        administrator for assistance.
      </Text>

      <Link href="/">
        <Button
          colorScheme="red"
          bgGradient="linear(to-r, red.400, red.500, red.600)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button>
      </Link>
    </Box>
  );
};
