import React from 'react';

export const Footer = () => {
  return (
    <Box
      as="footer"
      py="4"
      bg="gray.900"
      color="white"
      mt="auto"
      textAlign="center"
    >
      <Text fontSize="sm">
        &copy; Finance.de Developed By
        <Text as="span" fontWeight="bold">
          azilRababe
        </Text>
      </Text>
    </Box>
  );
};
