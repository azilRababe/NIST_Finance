import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  FormHelperText,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { Navbar } from './Navbar';

const Form1 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        EXPA EP Information
      </Heading>

      <FormControl mt="2%">
        <FormLabel htmlFor="oppId" fontWeight={'normal'}>
          Opportunity Id
        </FormLabel>
        <Input id="oppId" placeholder="Opportunity Id  ..." size={'sm'} />
      </FormControl>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Firstname
          </FormLabel>
          <Input id="first-name" placeholder="Firstname ..." size={'sm'} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Lastname
          </FormLabel>
          <Input id="last-name" placeholder="Firstname ..." size={'sm'} />
        </FormControl>
      </Flex>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="Nationality" fontWeight={'normal'}>
            Nationality
          </FormLabel>
          <Input id="Nationality" placeholder="Nationality ..." size={'sm'} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="Birthdate" fontWeight={'normal'}>
            Birthdate
          </FormLabel>
          <Input id="Birthdate" type="date" size={'sm'} />
        </FormControl>
      </Flex>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="Gender" fontWeight={'normal'}>
            Gender
          </FormLabel>
          <Select placeholder="Select option" id="Gender" size={'sm'}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="University" fontWeight={'normal'}>
            University
          </FormLabel>
          <Input id="University" placeholder="University" size={'sm'} />
        </FormControl>
      </Flex>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="Study_bg" fontWeight={'normal'}>
            Study Background
          </FormLabel>
          <Input id="Study_bg" placeholder="Study Background" size={'sm'} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="Status" fontWeight={'normal'}>
            Status
          </FormLabel>
          <Select placeholder="Select option" id="Status" size={'sm'}>
            <option value="Student">Student</option>
            <option value="Graduate">Graduate</option>
          </Select>
        </FormControl>
      </Flex>
    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Company Information
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="Name" fontWeight={'normal'}>
            Name
          </FormLabel>
          <Input id="Name" placeholder="Name ..." size={'sm'} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="Address" fontWeight={'normal'}>
            Address
          </FormLabel>
          <Input id="Address" placeholder="Address ..." size={'sm'} />
        </FormControl>
      </Flex>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="Supervisor" fontWeight={'normal'}>
            Supervisor
          </FormLabel>
          <Input id="Supervisor" placeholder="Supervisor ..." size={'sm'} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="phoneNumber" fontWeight={'normal'}>
            Phone Number
          </FormLabel>
          <Input id="phoneNumber" placeholder="Phone Number ..." size={'sm'} />
        </FormControl>
      </Flex>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="Profession" fontWeight={'normal'}>
            Profession
          </FormLabel>
          <Select placeholder="Select option" id="Profession" size={'sm'}>
            <option value="0">Architektur, Immobiliendienste</option>
            <option value="1">Automobilindustrie + Zulieferer</option>
            <option value="2">Banken, Finanzen, Versicherung</option>
            <option value="3">Baugewerbe, Handwerk, Fertigung</option>
            <option value="4">Bergbau, Metallgewerbe</option>
            <option value="5">Biotechnologie, Chemie</option>
            <option value="6">Pharmazie und Medizintechnik</option>
            <option value="7">Dienstleistung</option>
            <option value="8">Elektronik, Elektrotechnik, Technik</option>
            <option value="9">Energiewirtschaft, Rohstoffe</option>
            <option value="10">Feinmechanik, Optik</option>
            <option value="11">Foschung, Lehre/Bildung</option>
            <option value="12">Gastronomie, Hotel & Touristik</option>
            <option value="13">Gemeinützige Einrichtungen, NGO</option>
            <option value="14">Gesundheits- und Sozialwesen, Medizin</option>
            <option value="15">Grafik und Design</option>
            <option value="16">Handel</option>
            <option value="17">Internet, Multimedia</option>
            <option value="18">IT, Telekommunikation, EDV</option>
            <option value="19">Konsumgüter, Lebens und Genussmittel</option>
            <option value="20">Kunst und Kultur</option>
            <option value="21">Land und Forstwirtschaft</option>
            <option value="22">Luft- und Raumfahrtindustrie</option>
            <option value="23">Maschinen- und Anlagenbau</option>
            <option value="24">Medien(Print,Film,Funk,TV), Velag, Druck</option>
            <option value="25">
              Öffentlicher Dienst, staatliche Einrichtungen
            </option>
            <option value="26">Sonstige Branche</option>
            <option value="27">Sport, Fitness, Freizeit</option>
            <option value="28">Textil, Leder, Bekleidung</option>
            <option value="29">Transport, Logistik, Verkehr</option>
            <option value="30">Umwelt, Entsorgung, Recycling</option>
            <option value="31">Unternehmensberatung</option>
            <option value="32">Werbung, Marketing, PR</option>
            <option value="33">
              Wirtschaftsprüfung/Steuerberatung/Rechtsanwalt
            </option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="Salary" fontWeight={'normal'}>
            Salary
          </FormLabel>
          <Input id="Salary" placeholder="Salary" size={'sm'} />
        </FormControl>
      </Flex>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="ContractFrom" fontWeight={'normal'}>
            Contract From
          </FormLabel>
          <Input id="ContractFrom" type="date" size={'sm'} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="contractTo" fontWeight={'normal'}>
            Contract To
          </FormLabel>
          <Input id="contractTo" type="date" size={'sm'} />
        </FormControl>
      </Flex>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="Extension" fontWeight={'normal'}>
            Extension
          </FormLabel>
          <Select placeholder="Select option" id="Extension" size={'sm'}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="companyChange" fontWeight={'normal'}>
            Change of Company
          </FormLabel>
          <Select placeholder="Select option" id="companyChange" size={'sm'}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
        </FormControl>
      </Flex>

      <FormControl mt="2%">
        <FormLabel htmlFor="enrolledUntil" fontWeight={'normal'}>
          Enrolled until
        </FormLabel>
        <Input id="enrolledUntil" type="date" size={'sm'} />
      </FormControl>
    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Submitter
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="Name" fontWeight={'normal'}>
            Name
          </FormLabel>
          <Input id="Name" placeholder="Name ..." size={'sm'} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="Email" fontWeight={'normal'}>
            Email
          </FormLabel>
          <Input id="Email" placeholder="Email ..." type="email" size={'sm'} />
        </FormControl>
      </Flex>

      <FormControl mt="2%">
        <FormLabel htmlFor="LC" fontWeight={'normal'}>
          LC Name
        </FormLabel>
        <Select placeholder="Select option" id="LC" size={'sm'}>
          <option value="713">Aachen</option>
          <option value="686">Augsburg</option>
          <option value="1454">Bayreuth</option>
          <option value="680">Berlin HU</option>
          <option value="708">Berlin TU</option>
          <option value="664">Bielefeld</option>
          <option value="1442">Bochum</option>
          <option value="693">Bonn</option>
          <option value="678">Braunschweig</option>
          <option value="665">Bremen</option>
          <option value="667">Darmstadt</option>
          <option value="677">Dresden</option>
          <option value="1448">Duesseldorf</option>
          <option value="657">Frankfurt</option>
          <option value="1653">Freiburg</option>
          <option value="1420">Giessen-Marburg</option>
          <option value="1415">Goettingen</option>
          <option value="757">Halle</option>
          <option value="1523">Hamburg</option>
          <option value="1441">Hannover</option>
          <option value="699">Heidelberg</option>
          <option value="696">Jena</option>
          <option value="1533">Kaiserslautern</option>
          <option value="643">Karlsruhe</option>
          <option value="1438">Kiel</option>
          <option value="1421">Koeln</option>
          <option value="1410">Leipzig</option>
          <option value="1414">Lueneburg</option>
          <option value="1447">Magdeburg</option>
          <option value="60">Mainz-Wiesbaden</option>
          <option value="1520">Mannheim</option>
          <option value="1394">Muenchen</option>
          <option value="1484">Muenster</option>
          <option value="1440">Nuernberg</option>
          <option value="663">Paderborn</option>
          <option value="1403">Passau</option>
          <option value="648">Regensburg</option>
          <option value="647">Stuttgart</option>
          <option value="1443">Wuerzburg</option>
          <option value="1">MC</option>
        </Select>
      </FormControl>
    </>
  );
};

const Form4 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Status & Comments
      </Heading>

      <FormControl mt="2%">
        <FormLabel htmlFor="Status" fontWeight={'normal'}>
          Status
        </FormLabel>
        <Select placeholder="Select option" id="status" size={'sm'}>
          <option value="1">Open</option>
          <option value="2">send to MC</option>
          <option value="3">rework</option>
          <option value="4">sent to LC</option>
          <option value="5">sent to ZAV</option>
          <option value="6">Abgelehnt</option>
        </Select>
      </FormControl>
      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel id="submitterComment">Submitter's Comment</FormLabel>
          <Textarea
            placeholder="Add your comment here ..."
            id="submitterComment"
            size={'sm'}
          />
        </FormControl>

        <FormControl>
          <FormLabel id="MCComment">MC/FST Comment </FormLabel>
          <Textarea
            placeholder="Add your comment here ..."
            id="MCComment"
            size={'sm'}
          />
        </FormControl>
      </Flex>
    </>
  );
};

const Form5 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Additional Documents
      </Heading>
      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="PassportCopy" fontWeight={'normal'}>
            Copy of Passport
          </FormLabel>
          <Input type="file" id="PassportCopy" size={'sm'} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="Anabin" fontWeight={'normal'}>
            Anabin
          </FormLabel>
          <Input type="file" id="Anabin" size={'sm'} />
        </FormControl>
      </Flex>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor=" workContract" fontWeight={'normal'}>
            Work Contract
          </FormLabel>
          <Input type="file" id="workContract" size={'sm'} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="EnrollmentCertificate" fontWeight={'normal'}>
            Enrollment / Graduation Certificate
          </FormLabel>
          <Input type="file" id="EnrollmentCertificate" size={'sm'} />
        </FormControl>
      </Flex>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="INP" fontWeight={'normal'}>
            Internship progress plan
          </FormLabel>
          <Input type="file" id="INP" size={'sm'} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="empDeclaration" fontWeight={'normal'}>
            Declaration of employment
          </FormLabel>
          <Input type="file" id="empDeclaration" size={'sm'} />
        </FormControl>
      </Flex>

      <FormControl mt="2%">
        <FormLabel htmlFor="visa" fontWeight={'normal'}>
          Visa / entry stamp / fictional certificate
        </FormLabel>
        <Input type="file" id="visa" size={'sm'} />
        <FormHelperText size={'light'} color={'red.300'}>
          In case of extension !
        </FormHelperText>
      </FormControl>
    </>
  );
};

export const Zav = () => {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(20);
  return (
    <>
      <Navbar />
      <Box
        borderWidth="1px"
        rounded="md"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? (
          <Form1 />
        ) : step === 2 ? (
          <Form2 />
        ) : step === 3 ? (
          <Form3 />
        ) : step === 4 ? (
          <Form4 />
        ) : (
          <Form5 />
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
                onClick={() => {
                  toast({
                    title: 'Success.',
                    description:
                      "We've registered all the information for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
};
