import { useToast } from '@chakra-ui/react';
import { useCallback } from 'react';

export const UseDisplayToast = () => {
  const toast = useToast();

  const displayToast = useCallback(
    (title, description, status) => {
      toast({
        title,
        description,
        status,
        duration: 5000,
        isClosable: true,
      });
    },
    [toast]
  );

  return displayToast;
};
