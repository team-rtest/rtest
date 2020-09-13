import React from 'react';
import styled from 'styled-components';

import Upload from 'views/Upload';

import { Link } from 'react-router-dom';

function AssignmentPage({ assignment, setSelected }) {
  return (
    <Box>
      <Heading>{ assignment.name }</Heading>
      <Subheading> Submission instructions </Subheading>
      <Text>
        Submit your assignment through the QTest system, using course ID: CS470 and exam ID: hw2. Upload a single ZIP archive file named hw2.zip, containing all the files of your solution:
      </Text>
      <List>
        <li> The program’s source files. </li>
        <li> A README.txt file explaining how to compile and run your program. </li>
        <li> A file named result500.txt which is your solution for the dataset T10I4D100K.txt with minimum support count 500. </li>
        <li> The report in PDF format. </li>
        <li> The LaTeX source files used to typeset the report. </li>
      </List>
      <Text>
        No email submissions are accepted. No late submissions are accepted.
        At the top of your solution, include a section named “Collaboration statement” in which you acknowledge any collaboration, help, or resource you used or consulted to complete this assignment.
      </Text>
      <FileUpload>
        <Upload />
      </FileUpload>
    </Box>
  );
}

const Box = styled.div`
  width: calc(100vw - 300px);
  padding: 30px;
  overflow-y: auto;
`;

const Heading = styled.h1`
  font-weight: 700;
`;

const Subheading = styled.h4`
  margin-top: 32px;
  margin-bottom: 8px;
`;

const List = styled.ol`
  margin: 10px 0;
  color: grey;
`;

const Text = styled.div`
  color: grey;
`;

const FileUpload = styled.div`
  margin: 32px 0;
`;

export default AssignmentPage;
