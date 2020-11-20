import React from "react";
import styled from "styled-components";
import { Upload } from "components";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

function formatDate(value) {
  const date = new Date(value);
  const year = parseInt(date.getYear()) + 1900;
  const month = parseInt(date.getMonth());
  const day = date.getDate();

  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${MONTHS[month]} ${day}, ${year}`;
}

const assignmentDetails = gql`
  query assignmentDetails($id: ID!) {
    assignment(id: $id) {
      name
      maxGrade
      dateDue
      locked
      mySubmission {
        grade
        submittedAt
      }
    }
  }
`;

function AssignmentDetails() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(assignmentDetails, {
    variables: { id },
  });

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return (
    <Box>
      <Heading>{data.assignment.name}</Heading>
      <DateFormat>{formatDate(data.assignment.dateDue)}</DateFormat>
      <File>
        <FileName>CS334_HW1.pdf</FileName>
        <FileIcon className="fa fa-download"></FileIcon>
      </File>
      <Subheading> </Subheading>
      <Text></Text>
      <List></List>
      <Text></Text>
      <FileUpload>
        <Upload />
        <button className="btn btn-upload text-white" onClick={() => {}}>
          Submit File
        </button>
      </FileUpload>
      {data.assignment.mySubmission && (
        <Success>
          <Tick className="fa fa-check-circle" />Submitted on{" "}
          {formatDate(data.assignment.mySubmission.submittedAt)}
        </Success>
      )}
      {!data.assignment.mySubmission && !data.assignment.locked && (
        <Failure>
          <Cross className="fa fa-times-circle" /> Closed on{" "}
          {formatDate(data.assignment.dateDue)}
        </Failure>
      )}
    </Box>
  )
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

  color: #6173db !important;
  border-color: #6173db;
  background: rgba(97, 115, 219, 0.2);

  & ${FileIcon} {
    color: #6173db;
  }

  & ${FileName} {
    color: #6173db;
  }
`;

const Heading = styled.h1`
  font-weight: 700;
`;

const DateFormat = styled.div`
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

  color: #6173db !important;
  border-color: #6173db;
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

const Tick = styled.span``;

const Cross = styled.span``;

export default AssignmentDetails;