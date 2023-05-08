import React from 'react';
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

// import Input from 'react-file-input';

export const Form1 = ({ formData, setFormData }) => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        EXPA EP Information
      </Heading>

      <FormControl mt="2%" isRequired>
        <FormLabel htmlFor="oppId" fontWeight={'normal'}>
          {/* must be stored  */}
          Opportunity Id
        </FormLabel>
        <Input
          required
          id="oppId"
          placeholder="Opportunity Id  ..."
          size={'sm'}
          name="opp_id"
          onChange={e => setFormData({ ...formData, opp_id: e.target.value })}
        />
      </FormControl>

      <Flex mt="2%">
        <FormControl mr="5%" isRequired>
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Firstname
          </FormLabel>
          <Input
            required
            id="first-name"
            placeholder="Firstname ..."
            size={'sm'}
            name="firstname"
            onChange={e =>
              setFormData({ ...formData, firstname: e.target.value })
            }
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Lastname
          </FormLabel>
          <Input
            required
            id="last-name"
            placeholder="Firstname ..."
            size={'sm'}
            name="lastname"
            onChange={e =>
              setFormData({ ...formData, lastname: e.target.value })
            }
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
            onChange={e =>
              setFormData({ ...formData, nationality: e.target.value })
            }
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
            onChange={e =>
              setFormData({ ...formData, birthdate: e.target.value })
            }
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
            onChange={e => setFormData({ ...formData, gender: e.target.value })}
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
            onChange={e =>
              setFormData({ ...formData, university: e.target.value })
            }
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
            onChange={e =>
              setFormData({ ...formData, study_bg: e.target.value })
            }
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
            onChange={e =>
              setFormData({ ...formData, std_status: e.target.value })
            }
          >
            <option value="Student">Student</option>
            <option value="Graduate">Graduate</option>
            <option value="Other">Other</option>
          </Select>
        </FormControl>
      </Flex>
    </>
  );
};

export const Form2 = ({ formData, setFormData }) => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Company Information
      </Heading>
      <Flex>
        <FormControl mr="5%" isRequired>
          <FormLabel htmlFor="Name" fontWeight={'normal'}>
            Company Name
          </FormLabel>
          <Input
            required
            id="Name"
            placeholder="Name ..."
            size={'sm'}
            name="cmp_name"
            onChange={e =>
              setFormData({ ...formData, cmp_name: e.target.value })
            }
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
            onChange={e =>
              setFormData({ ...formData, cmp_address: e.target.value })
            }
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
            onChange={e =>
              setFormData({ ...formData, supervisor: e.target.value })
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="phoneNumber" fontWeight={'normal'}>
            Phone Number
          </FormLabel>
          <Input
            // type="number"
            id="cmp_tel"
            placeholder="Phone Number ..."
            size={'sm'}
            name="cmp_tel"
            onChange={e =>
              setFormData({ ...formData, cmp_tel: e.target.value })
            }
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
            onChange={e =>
              setFormData({ ...formData, industry: e.target.value })
            }
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
            onChange={e => setFormData({ ...formData, salary: e.target.value })}
          />
        </FormControl>
      </Flex>

      <Flex mt="2%">
        <FormControl mr="5%" isRequired>
          <FormLabel htmlFor="ContractFrom" fontWeight={'normal'}>
            Contract From
          </FormLabel>
          <Input
            required
            id="ContractFrom"
            type="date"
            size={'sm'}
            name="contract_from"
            onChange={e =>
              setFormData({ ...formData, contract_from: e.target.value })
            }
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="contractTo" fontWeight={'normal'}>
            Contract To
          </FormLabel>
          <Input
            required
            id="contract_to"
            type="date"
            size={'sm'}
            name="contract_to"
            onChange={e =>
              setFormData({ ...formData, contract_to: e.target.value })
            }
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
            id="Verlängerung"
            size={'sm'}
            name="Verlängerung"
            onChange={e =>
              setFormData({ ...formData, Verlängerung: e.target.value })
            }
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="Betriebswechsel" fontWeight={'normal'}>
            Change of Company
          </FormLabel>
          <Select
            placeholder="Select option"
            id="Betriebswechsel"
            size={'sm'}
            name="Betriebswechsel"
            onChange={e =>
              setFormData({ ...formData, Betriebswechsel: e.target.value })
            }
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
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
          onChange={e =>
            setFormData({ ...formData, enrolled_until: e.target.value })
          }
        />
      </FormControl>
    </>
  );
};

export const Form3 = ({ formData, setFormData }) => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Submitter
      </Heading>
      <Flex>
        <FormControl mr="5%" isRequired>
          <FormLabel htmlFor="Name" fontWeight={'normal'}>
            Submitter Name
          </FormLabel>
          <Input
            required
            id="Name"
            placeholder="Name ..."
            size={'sm'}
            name="submitter_name"
            onChange={e =>
              setFormData({ ...formData, submitter_name: e.target.value })
            }
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
              setFormData({ ...formData, submitter_email: e.target.value })
            }
          />
        </FormControl>
      </Flex>

      <FormControl mt="2%" isRequired>
        <FormLabel htmlFor="LC" fontWeight={'normal'}>
          Submitter LC
        </FormLabel>
        <Select
          required
          placeholder="Select option"
          id="LC"
          size={'sm'}
          name="submitter_lc"
          onChange={e =>
            setFormData({ ...formData, submitter_lc: e.target.value })
          }
        >
          <option value="Aachen">Aachen</option>
          <option value="Augsburg">Augsburg</option>
          <option value="Bayreuth">Bayreuth</option>
          <option value="Berlin HU">Berlin HU</option>
          <option value="Berlin TU">Berlin TU</option>
          <option value="Bielefeld">Bielefeld</option>
          <option value="Bochum">Bochum</option>
          <option value="Bonn">Bonn</option>
          <option value="Braunschweig">Braunschweig</option>
          <option value="Bremen">Bremen</option>
          <option value="Darmstadt">Darmstadt</option>
          <option value="Dresden">Dresden</option>
          <option value="Duesseldorf">Duesseldorf</option>
          <option value="Frankfurt">Frankfurt</option>
          <option value="Freiburg">Freiburg</option>
          <option value="Giessen-Marburg">Giessen-Marburg</option>
          <option value="Goettingen">Goettingen</option>
          <option value="Halle">Halle</option>
          <option value="Hamburg">Hamburg</option>
          <option value="Hannover">Hannover</option>
          <option value="Heidelberg">Heidelberg</option>
          <option value="Jena">Jena</option>
          <option value="Kaiserslautern">Kaiserslautern</option>
          <option value="Karlsruhe">Karlsruhe</option>
          <option value="Kiel">Kiel</option>
          <option value="Koeln">Koeln</option>
          <option value="Leipzig">Leipzig</option>
          <option value="Lueneburg">Lueneburg</option>
          <option value="Magdeburg">Magdeburg</option>
          <option value="Mainz-Wiesbaden">Mainz-Wiesbaden</option>
          <option value="Mannheim">Mannheim</option>
          <option value="Muenchen">Muenchen</option>
          <option value="Muenster">Muenster</option>
          <option value="Nuernberg">Nuernberg</option>
          <option value="Paderborn">Paderborn</option>
          <option value="Passau">Passau</option>
          <option value="Regensburg">Regensburg</option>
          <option value="Stuttgart">Stuttgart</option>
          <option value="Wuerzburg">Wuerzburg</option>
          <option value="MC">MC</option>
        </Select>
      </FormControl>
    </>
  );
};

export const Form4 = ({ formData, setFormData }) => {
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
          onChange={e =>
            setFormData({ ...formData, app_status: e.target.value })
          }
        >
          <option value="Open">Open</option>
          <option value="send to MC">send to MC</option>
          <option value="rework">rework</option>
          <option value="sent to LC">sent to LC</option>
          <option value="sent to ZAV">sent to ZAV</option>
          <option value="Abgelehnt">Abgelehnt</option>
        </Select>
      </FormControl>
      <Flex mt="2%">
        <FormControl mr="5%">
          {/* must be stored */}
          <FormLabel id="submitterComment">Submitter's Comment</FormLabel>
          <Textarea
            placeholder="Add your comment here ..."
            id="submitterComment"
            size={'sm'}
            name="sub_comment"
            onChange={e =>
              setFormData({ ...formData, sub_comment: e.target.value })
            }
          />
        </FormControl>

        <FormControl>
          {/* must be stored */}
          <FormLabel id="MCComment">MC/FST Comment </FormLabel>
          <Textarea
            placeholder="Add your comment here ..."
            id="MCComment"
            size={'sm'}
            name="mc_comment"
            onChange={e =>
              setFormData({ ...formData, mc_comment: e.target.value })
            }
          />
        </FormControl>
      </Flex>
    </>
  );
};

export const Form5 = ({ file, setFile }) => {
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
            onChange={e =>
              setFile({ ...file, passportCopy: e.target.files[0] })
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="Anabin" fontWeight={'normal'}>
            Anabin
          </FormLabel>
          <Input
            type="file"
            id="Anabin"
            size={'sm'}
            name="anabin"
            onChange={e => setFile({ ...file, anabin: e.target.files[0] })}
          />
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
            onChange={e =>
              setFile({ ...file, workContract: e.target.files[0] })
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="EnrollmentCertificate" fontWeight={'normal'}>
            Enrollment / Graduation Certificate
          </FormLabel>
          <Input
            type="file"
            id="EnrollmentCertificate"
            size={'sm'}
            name="EnrollmentCertificate"
            onChange={e =>
              setFile({ ...file, EnrollmentCertificate: e.target.files[0] })
            }
          />
        </FormControl>
      </Flex>

      <Flex mt="2%">
        <FormControl mr="5%">
          <FormLabel htmlFor="INP" fontWeight={'normal'}>
            Internship progress plan
          </FormLabel>
          <Input
            type="file"
            id="INP"
            size={'sm'}
            name="Internship_progress_plan"
            onChange={e =>
              setFile({ ...file, Internship_progress_plan: e.target.files[0] })
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="empDeclaration" fontWeight={'normal'}>
            Declaration of employment
          </FormLabel>
          <Input
            type="file"
            id="empDeclaration"
            size={'sm'}
            name="DeclarationOFemployment"
            onChange={e =>
              setFile({ ...file, DeclarationOFemployment: e.target.files[0] })
            }
          />
        </FormControl>
      </Flex>

      <FormControl mt="2%">
        <FormLabel htmlFor="visa" fontWeight={'normal'}>
          Visa / entry stamp / fictional certificate
        </FormLabel>
        <Input
          type="file"
          id="visa"
          size={'sm'}
          name="visa"
          onChange={e => setFile({ ...file, visa: e.target.files[0] })}
        />
        <FormHelperText size={'light'} color={'red.300'}>
          In case of extension !
        </FormHelperText>
      </FormControl>
    </>
  );
};
