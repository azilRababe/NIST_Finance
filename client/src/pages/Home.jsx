import React, { useEffect, useState, useRef } from 'react';
import { Navbar } from '../components/Navbar';
// import { Footer } from '../components/Footer';
import { TriggerModal } from '../components/TriggerModal';
import axios from 'axios';

import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Text,
  Button,
  Box,
  useDisclosure,
} from '@chakra-ui/react';

import { UseDisplayToast } from '../utils/UseDisplayToast';

export const Home = () => {
  //
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const [userId, setUserID] = useState(null);
  //
  const [userData, setUserData] = useState([]);
  const displayToast = UseDisplayToast(); //diplay a toast

  //handle delete
  const handleDelete = id => {
    axios
      .delete(`delete-zav/${id}`)
      .then(response => {
        displayToast('Success', 'Deleted successfully', 'success');
        setUserData(userData.filter(item => item._id !== id));
      })
      .catch(err =>
        displayToast('Something went wrong!', err?.response?.data?.err, 'error')
      );
  };
  // handle edit
  const handleEdit = id => {
    axios
      .patch(`update-zav/${id}`)
      .then(
        () => displayToast('Success', 'Row updated successfully', 'success')
        // setData(
        //   data.map(item => (item._id === id ? { ...item, ...updatedData } : item))
        // )
      )
      .catch(err =>
        displayToast('Something went wrong!', err?.response?.data?.err, 'error')
      );
  };

  // fetching
  const getData = () => {
    axios
      .get('getAllZavs')
      .then(res => {
        setUserData(res.data.data);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Box px="12" mx="auto" my="10">
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          {userData &&
            userData.map(item => (
              <Card>
                <CardHeader>
                  <Heading size="md">{`${item.firstname} ${item.lastname}`}</Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Text>
                </CardBody>
                <CardFooter gap="2">
                  <Button
                    colorScheme="green"
                    size="xs"
                    variant="outline"
                    onClick={() => handleEdit(item._id)}
                  >
                    Edit
                  </Button>
                  <Button
                    colorScheme="red"
                    size="xs"
                    variant="outline"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                  <Button
                    ref={btnRef}
                    onClick={() => {
                      setUserID(item._id);
                      onOpen();
                    }}
                    colorScheme="messenger"
                    size="xs"
                    variant="outline"
                  >
                    More
                  </Button>

                  <TriggerModal
                    btnRef={btnRef}
                    onClose={onClose}
                    isOpen={isOpen}
                    userData={userData}
                    userId={userId}
                  />
                </CardFooter>
              </Card>
            ))}
        </SimpleGrid>
      </Box>
    </>
  );
};
