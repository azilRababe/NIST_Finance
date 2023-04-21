import React, { useState } from 'react';
import {
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  FormHelperText,
} from '@chakra-ui/react';

export const Form1 = () => {
  const [data, setData] = useState(null);
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        EXPA EP Information
      </Heading>

      <FormControl mt="2%">
        <FormLabel htmlFor="oppId" fontWeight={'normal'}>
          Opportunity Id
        </FormLabel>
        <Input
          id="oppId"
          placeholder="Opportunity Id  ..."
          size={'sm'}
          name="opp_id"
          onChange={e => setData({ ...data, opp_id: e.target.value })}
        />
      </FormControl>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Firstname
          </FormLabel>
          <Input
            id="first-name"
            placeholder="Firstname ..."
            size={'sm'}
            name="firstname"
            onChange={e => setData({ ...data, firstname: e.target.value })}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Lastname
          </FormLabel>
          <Input
            id="last-name"
            placeholder="Firstname ..."
            size={'sm'}
            name="lastname"
            onChange={e => setData({ ...data, lastname: e.target.value })}
          />
        </FormControl>
      </Flex>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="Nationality" fontWeight={'normal'}>
            Nationality
          </FormLabel>
          <Input
            id="Nationality"
            placeholder="Nationality ..."
            size={'sm'}
            name="nationality"
            onChange={e => setData({ ...data, nationality: e.target.value })}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="Birthdate" fontWeight={'normal'}>
            Birthdate
          </FormLabel>
          <Input
            id="Birthdate"
            type="date"
            size={'sm'}
            name="birthdate"
            onChange={e => setData({ ...data, birthday: e.target.value })}
          />
        </FormControl>
      </Flex>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="Gender" fontWeight={'normal'}>
            Gender
          </FormLabel>
          <Select
            placeholder="Select option"
            id="Gender"
            size={'sm'}
            name="gender"
            onChange={e => setData({ ...data, gender: e.target.value })}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="University" fontWeight={'normal'}>
            University
          </FormLabel>
          <Input
            id="University"
            placeholder="University"
            size={'sm'}
            name="university"
            onChange={e => setData({ ...data, university: e.target.value })}
          />
        </FormControl>
      </Flex>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="Study_bg" fontWeight={'normal'}>
            Study Background
          </FormLabel>
          <Input
            id="Study_bg"
            placeholder="Study Background"
            size={'sm'}
            name="study_bg"
            onChange={e => setData({ ...data, study_bg: e.target.value })}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="Status" fontWeight={'normal'}>
            Status
          </FormLabel>
          <Select
            placeholder="Select option"
            id="Status"
            size={'sm'}
            name="std_status"
            onChange={e => setData({ ...data, std_status: e.target.value })}
          >
            <option value="Student">Student</option>
            <option value="Graduate">Graduate</option>
          </Select>
        </FormControl>
      </Flex>
    </>
  );
};

export const Form2 = () => {
  const [data, setData] = useState(null);
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Company Information
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="Name" fontWeight={'normal'}>
            Company Name
          </FormLabel>
          <Input
            id="Name"
            placeholder="Name ..."
            size={'sm'}
            name="cmp_name"
            onChange={e => setData({ ...data, cmp_name: e.target.value })}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="Address" fontWeight={'normal'}>
            Address
          </FormLabel>
          <Input
            id="Address"
            placeholder="Address ..."
            size={'sm'}
            name="cmp_address"
            onChange={e => setData({ ...data, cmp_address: e.target.value })}
          />
        </FormControl>
      </Flex>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="Supervisor" fontWeight={'normal'}>
            Supervisor
          </FormLabel>
          <Input
            id="Supervisor"
            placeholder="Supervisor ..."
            size={'sm'}
            name="supervisor"
            onChange={e => setData({ ...data, supervisor: e.target.value })}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="phoneNumber" fontWeight={'normal'}>
            Phone Number
          </FormLabel>
          <Input
            id="phoneNumber"
            placeholder="Phone Number ..."
            size={'sm'}
            name="cmp_tel"
            onChange={e => setData({ ...data, cmp_tel: e.target.value })}
          />
        </FormControl>
      </Flex>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="Profession" fontWeight={'normal'}>
            Industry
          </FormLabel>
          <Select
            placeholder="Select option"
            id="Industry"
            size={'sm'}
            name="industry"
            onChange={e => setData({ ...data, industry: e.target.value })}
          >
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
          <Input
            id="Salary"
            placeholder="Salary"
            size={'sm'}
            name="salary"
            onChange={e => setData({ ...data, salary: e.target.value })}
          />
        </FormControl>
      </Flex>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="ContractFrom" fontWeight={'normal'}>
            Contract From
          </FormLabel>
          <Input
            id="ContractFrom"
            type="date"
            size={'sm'}
            name="contract_from"
            onChange={e => setData({ ...data, contract_from: e.target.value })}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="contractTo" fontWeight={'normal'}>
            Contract To
          </FormLabel>
          <Input
            id="contract_to"
            type="date"
            size={'sm'}
            name="contract_to"
            onChange={e => setData({ ...data, contract_to: e.target.value })}
          />
        </FormControl>
      </Flex>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="Extension" fontWeight={'normal'}>
            Extension
          </FormLabel>
          <Select
            placeholder="Select option"
            id="Extension"
            size={'sm'}
            name="extension"
            onChange={e => setData({ ...data, extension: e.target.value })}
          >
            <option value="Yes">Yes</option>
            <option value="No" defaultChecked>
              No
            </option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="companyChange" fontWeight={'normal'}>
            Change of Company
          </FormLabel>
          <Select
            placeholder="Select option"
            id="companyChange"
            size={'sm'}
            name="cmp_change"
            onChange={e => setData({ ...data, cmp_change: e.target.value })}
          >
            <option value="Yes">Yes</option>
            <option value="No" defaultChecked>
              No
            </option>
          </Select>
        </FormControl>
      </Flex>

      <FormControl mt="2%">
        <FormLabel htmlFor="enrolledUntil" fontWeight={'normal'}>
          Enrolled until
        </FormLabel>
        <Input
          id="enrolledUntil"
          type="date"
          size={'sm'}
          name="enrolled_until"
          onChange={e => setData({ ...data, enrolled_until: e.target.value })}
        />
      </FormControl>
    </>
  );
};

export const Form3 = () => {
  const [data, setData] = useState(null);

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Submitter
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="Name" fontWeight={'normal'}>
            Submitter Name
          </FormLabel>
          <Input
            id="Name"
            placeholder="Name ..."
            size={'sm'}
            name="submitter_name"
            onChange={e => setData({ ...data, submitter_name: e.target.value })}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="Email" fontWeight={'normal'}>
            Submitter Email
          </FormLabel>
          <Input
            id="Email"
            placeholder="Email ..."
            type="email"
            size={'sm'}
            name="submitter_email"
            onChange={e =>
              setData({ ...data, submitter_email: e.target.value })
            }
          />
        </FormControl>
      </Flex>

      <FormControl mt="2%">
        <FormLabel htmlFor="LC" fontWeight={'normal'}>
          Submitter LC
        </FormLabel>
        <Select
          placeholder="Select option"
          id="LC"
          size={'sm'}
          name="submitter_lc"
          onChange={e => setData({ ...data, submitter_lc: e.target.value })}
        >
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

export const Form4 = () => {
  const [data, setData] = useState(null);
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Status & Comments
      </Heading>

      <FormControl mt="2%">
        <FormLabel htmlFor="Status" fontWeight={'normal'}>
          Status
        </FormLabel>
        <Select
          placeholder="Select option"
          id="status"
          size={'sm'}
          name="app_status"
          onChange={e => setData({ ...data, app_status: e.target.value })}
        >
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
            name="sub_comment"
            onChange={e => setData({ ...data, sub_comment: e.target.value })}
          />
        </FormControl>

        <FormControl>
          <FormLabel id="MCComment">MC/FST Comment </FormLabel>
          <Textarea
            placeholder="Add your comment here ..."
            id="MCComment"
            size={'sm'}
            name="mc_comment"
            onChange={e => setData({ ...data, mc_comment: e.target.value })}
          />
        </FormControl>
      </Flex>
    </>
  );
};

export const Form5 = () => {
  const [data, setData] = useState(null);
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
          <Input
            type="file"
            id="PassportCopy"
            name="passportCopy"
            size={'sm'}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="Anabin" fontWeight={'normal'}>
            Anabin
          </FormLabel>
          <Input type="file" id="Anabin" size={'sm'} name="anabin" />
        </FormControl>
      </Flex>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor=" workContract" fontWeight={'normal'}>
            Work Contract
          </FormLabel>
          <Input
            type="file"
            id="workContract"
            size={'sm'}
            name="workContract"
          />
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
