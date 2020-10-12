import React from 'react';
import styled from 'styled-components';

import Upload from 'views/Upload';
import Graph from './Graph';
import Table from './Table';

import { Link } from 'react-router-dom';

function AssignmentPage({ selected, assignments, setSelected }) {
  return (
    <Box>
      <Heading>{ selected.name }</Heading>
      <Date> Due: September 18th 2020 </Date>
      <File>
        <FileName>CS334_HW1.pdf</FileName>
        <FileIcon className="fa fa-download"></FileIcon>
      </File>
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
        <button className="btn btn-upload text-white" onClick={() => {}}> Submit File </button>
      </FileUpload>
      <Success><Tick className="fa fa-check-circle" /> Submitted on August 28th 2020</Success>
      <Failure><Cross className="fa fa-times-circle" /> Closed on August 28th 2020</Failure>
    </Box>
  );
}

const Box = styled.div`
  width: calc(100vw - 350px);
  padding: 30px;
  overflow-y: auto;
`;

const FileIcon = styled.span`
  color: grey;
`;

const FileName = styled.span`
  font-weight: 500;
`;

const File = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border: 1px solid lightgrey;
  width: 200px;
  padding: 15px;
  margin-top: 20px;
  border-radius: 0.25rem;

  color: #6173DB !important;
  border-color: #6173DB;
  background: rgba(97, 115, 219, 0.2);

  & ${FileIcon} {
    color: #6173DB;
  }

  & ${FileName} {
    color: #6173DB;
  }
`;

const Heading = styled.h1`
  font-weight: 700;
`;

const Date = styled.div`
  color: grey;
  font-size: 1.1rem;
`;

const Subheading = styled.h4`
  margin-top: 20px;
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

const Success = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgrey;
  width: 300px;
  padding: 15px;
  margin-top: 20px;
  border-radius: 0.25rem;
  font-weight: 500;

  color: #6173DB !important;
  border-color: #6173DB;
  // background: rgba(97, 115, 219, 0.2);
`;

const Failure = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgrey;
  width: 275px;
  padding: 15px;
  margin-top: 20px;
  border-radius: 0.25rem;
  font-weight: 500;

  // color: hsl(350, 62.9%, 62%);
  // background: hsla(350, 62.9%, 62%, 0.2);

  color: hsl(350, 62.9%, 62%) !important;
  border-color: hsl(350, 62.9%, 62%);
`;

const Tick = styled.span`

`;

const Cross = styled.span``;

export default AssignmentPage;

// <Box>
//   <Heading> Quizzes </Heading>
//   <Subheading> Grades </Subheading>
//   <Graph />
//   <Subheading> Assignments </Subheading>
//   <Table assignments={assignments} />
// </Box>
