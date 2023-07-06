import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Table,
  Tr,
  Td,
  Link,
  Tbody,
  TableCaption,
} from '@chakra-ui/react';

import moment from 'moment';

import { ExternalLinkIcon } from '@chakra-ui/icons';
export const TriggerModal = ({ userData, userId, onClose, btnRef, isOpen }) => {
  const [scrollBehavior, setScrollBehavior] = React.useState('inside');

  return (
    <>
      {userData &&
        userData.map(
          item =>
            item._id === userId && (
              <Modal
                key={item._id}
                onClose={onClose}
                finalFocusRef={btnRef}
                isOpen={isOpen}
                scrollBehavior={scrollBehavior}
                size="xl"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>{`${item.firstname} ${item.lastname}`}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Table variant="simple" size="xs">
                      <TableCaption>Data Details</TableCaption>
                      <Tbody>
                        <Tr>
                          <Td>Opp ID:</Td>
                          <Td>{item.opp_id}</Td>
                        </Tr>
                        <Tr>
                          <Td>First Name:</Td>
                          <Td>{item.firstname}</Td>
                        </Tr>
                        <Tr>
                          <Td>Last Name:</Td>
                          <Td>{item.lastname}</Td>
                        </Tr>
                        <Tr>
                          <Td>Nationality:</Td>
                          <Td>{item.nationality}</Td>
                        </Tr>
                        <Tr>
                          <Td>Birthdate:</Td>
                          <Td>
                            {moment(item.birthdate).format('MMMM D, YYYY')}
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>Gender:</Td>
                          <Td>{item.gender}</Td>
                        </Tr>
                        <Tr>
                          <Td>University:</Td>
                          <Td>{item.university}</Td>
                        </Tr>
                        <Tr>
                          <Td>Study Background:</Td>
                          <Td>
                            {item.study_bg ? item.study_bg : 'Not Provided'}
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>Study Status:</Td>
                          <Td>{item.std_status}</Td>
                        </Tr>
                        <Tr>
                          <Td>Company Name:</Td>
                          <Td>{item.cmp_name}</Td>
                        </Tr>
                        <Tr>
                          <Td>Company Address:</Td>
                          <Td>{item.cmp_address}</Td>
                        </Tr>
                        <Tr>
                          <Td>Supervisor:</Td>
                          <Td>{item.supervisor}</Td>
                        </Tr>
                        <Tr>
                          <Td>Phone Number (Company):</Td>
                          <Td>{item.cmp_tel}</Td>
                        </Tr>
                        <Tr>
                          <Td>Industry:</Td>
                          <Td>{item.industry}</Td>
                        </Tr>
                        <Tr>
                          <Td>Salary:</Td>
                          <Td>{item.salary}</Td>
                        </Tr>
                        <Tr>
                          <Td>Contract Starts:</Td>
                          <Td>
                            {moment(item.contract_from).format('MMMM D, YYYY')}
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>Contract Ends:</Td>
                          <Td>
                            {moment(item.contract_to).format('MMMM D, YYYY')}
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>Verlängerung:</Td>
                          <Td>{item.Verlängerung}</Td>
                        </Tr>
                        <Tr>
                          <Td>Betriebswechsel:</Td>
                          <Td>{item.Betriebswechsel}</Td>
                        </Tr>
                        <Tr>
                          <Td>Enrolled Until:</Td>
                          <Td>{item.enrolled_until}</Td>
                        </Tr>
                        <Tr>
                          <Td>Submitter Name:</Td>
                          <Td>{item.submitter_name}</Td>
                        </Tr>
                        <Tr>
                          <Td>Submitter Email:</Td>
                          <Td>{item.submitter_email}</Td>
                        </Tr>
                        <Tr>
                          <Td>Submitter LC:</Td>
                          <Td>{item.submitter_lc}</Td>
                        </Tr>
                        <Tr>
                          <Td>Application Status:</Td>
                          <Td>{item.app_status}</Td>
                        </Tr>
                        <Tr>
                          <Td>Submitter Comment:</Td>
                          <Td>{item.sub_comment}</Td>
                        </Tr>
                        <Tr>
                          <Td>MC Comment:</Td>
                          <Td>{item.mc_comment}</Td>
                        </Tr>
                        <Tr>
                          <Td>Passport:</Td>
                          <Td>
                            <Link href={item.passportCopy}>
                              Click Me <ExternalLinkIcon mx="2px" />
                            </Link>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>Anabin:</Td>
                          <Td>
                            <Link href={item.anabin}>
                              Click Me <ExternalLinkIcon mx="2px" />
                            </Link>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>Work Contract:</Td>
                          <Td>
                            <Link href={item.workContract}>
                              Click Me <ExternalLinkIcon mx="2px" />
                            </Link>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>Enrollment Certificate:</Td>
                          <Td>
                            <Link href={item.EnrollmentCertificate}>
                              Click Me <ExternalLinkIcon mx="2px" />
                            </Link>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>Internship Progress Plan:</Td>
                          <Td>
                            <Link href={item.Internship_progress_plan}>
                              Click Me <ExternalLinkIcon mx="2px" />
                            </Link>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>Declaration of Employment:</Td>
                          <Td>
                            <Link href={item.DeclarationOFemployment}>
                              Click Me <ExternalLinkIcon mx="2px" />
                            </Link>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>Visa:</Td>
                          <Td>
                            <Link href={item.visa}>
                              Click Me <ExternalLinkIcon mx="2px" />
                            </Link>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            )
        )}
    </>
  );
};
