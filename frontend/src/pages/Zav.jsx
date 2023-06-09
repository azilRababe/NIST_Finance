import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Flex,
  Spinner,
} from '@chakra-ui/react';

import { Form1, Form2, Form3, Form4, Form5 } from '../components/ZavForms';

import axios from 'axios';

import { UseDisplayToast } from '../utils/UseDisplayToast';

import { saveAs } from 'file-saver';

import { Sidebar } from '../components/Sidebar';

export const Zav = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(20);
  const [formData, setFormData] = useState({});

  const [isLoading, setLoading] = useState(false);
  const displayToast = UseDisplayToast();

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const [uploadResponse, generatePDFResponse] = await Promise.all([
        axios.post('/upload-files', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }),
        axios.post('/generate-pdf', formData, {
          responseType: 'blob',
          headers: {
            'Content-Type': 'application/json',
          },
        }),
      ]);

      const pdfBlob = new Blob([generatePDFResponse.data], {
        type: 'application/pdf',
      });
      saveAs(pdfBlob, 'Zav.pdf');
      displayToast(
        'Success!',
        'The PDF file has been generated successfully',
        'success'
      );
    } catch (error) {
      displayToast(
        'Something went wrong!',
        error?.response?.data?.err,
        'error'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex>
      <Sidebar />

      <Box flex="1" p="8" bg="gray.100">
        <Box
          borderWidth="1px"
          rounded="md"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={800}
          p={6}
          m="10px auto"
          as="form"
          bg="white"
        >
          <Progress
            hasStripe
            value={progress}
            mb="5%"
            mx="5%"
            isAnimated
          ></Progress>
          {step === 1 ? (
            <Form1 formData={formData} setFormData={setFormData} />
          ) : step === 2 ? (
            <Form2 formData={formData} setFormData={setFormData} />
          ) : step === 3 ? (
            <Form3 formData={formData} setFormData={setFormData} />
          ) : step === 4 ? (
            <Form4 formData={formData} setFormData={setFormData} />
          ) : (
            <Form5 formData={formData} setFormData={setFormData} />
          )}
          <ButtonGroup mt="5%" w="100%">
            <Flex w="100%" justifyContent="space-between">
              <Flex>
                <Button
                  onClick={() => {
                    setStep(step - 1);
                    setProgress(progress - 20);
                  }}
                  isDisabled={step === 1}
                  colorScheme="teal"
                  variant="solid"
                  w="7rem"
                  mr="5%"
                >
                  Back
                </Button>
                <Button
                  w="7rem"
                  isDisabled={step === 5}
                  onClick={() => {
                    setStep(step + 1);
                    if (step === 4) {
                      setProgress(100);
                    } else {
                      setProgress(progress + 20);
                    }
                  }}
                  colorScheme="teal"
                  variant="outline"
                >
                  Next
                </Button>
              </Flex>
              {step === 5 ? (
                <Button
                  w="7rem"
                  colorScheme="red"
                  variant="solid"
                  onClick={handleSubmit}
                >
                  {isLoading ? <Spinner size="sm" /> : 'Generate'}
                </Button>
              ) : null}
            </Flex>
          </ButtonGroup>
        </Box>
      </Box>
    </Flex>
  );
};
