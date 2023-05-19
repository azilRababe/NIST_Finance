import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import axios from 'axios';

import { Table, Thead, Tbody, Tr, Th, Td, Button, Box } from '@chakra-ui/react';

import { UseDisplayToast } from '../utils/UseDisplayToast';

export const Home = () => {
  const [data, setData] = useState([]);
  const displayToast = UseDisplayToast();

  const handleDelete = id => {
    axios
      .delete(`delete-zav/${id}`)
      .then(() => {
        displayToast('Success', 'Row deleted successfully', 'success');
        setData(data.filter(item => item._id !== id));
      })
      .catch(err =>
        displayToast('Something went wrong!', err?.response?.data?.err, 'error')
      );
  };

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
        setData(res.data.data);
        console.log(data);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Box
        width="75%"
        mx="auto"
        boxShadow="sm"
        borderRadius="lg"
        overflow="hidden"
        marginTop="10"
      >
        <Table variant="simple">
          <Thead backgroundColor="gray.100">
            <Tr>
              <Th fontWeight="bold" fontSize="sm" color="gray.600">
                ID
              </Th>
              <Th fontWeight="bold" fontSize="sm" color="gray.600">
                Fullname
              </Th>
              <Th fontWeight="bold" fontSize="sm" color="gray.600">
                LC
              </Th>
              <Th fontWeight="bold" fontSize="sm" color="gray.600">
                Status
              </Th>
              <Th fontWeight="bold" fontSize="sm" color="gray.600">
                Actions
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map(item => (
                <Tr key={item._id}>
                  <Td>{item._id}</Td>
                  <Td>{`${item.firstname} ${item.lastname}`}</Td>
                  <Td>{item.submitter_lc}</Td>
                  <Td>{item.app_status}</Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      size="sm"
                      variant="outline"
                      mr={2}
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </Button>
                    <Button
                      colorScheme="blue"
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(item._id)}
                    >
                      Edit
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>

      {/* <Footer /> */}
    </>
  );
};
