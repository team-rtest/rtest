import React, { useState } from "react";
import styled from "styled-components";

import Submission from "views/Internal/Professor/Submission/Submission";

function Submissions() {
  const [submissionModal, setSubmissionModal] = useState(false);

  const LATE = <Late>Late</Late>;

  return (
    <Table>
      {submissionModal && <Submission closeModal={() => setSubmissionModal(false)} />}
      <thead>
        <Row>
          <HeadCell>Student</HeadCell>
          <HeadCell>Date</HeadCell>
          <HeadCell>Submission File</HeadCell>
          <HeadCell>Grade</HeadCell>
        </Row>
      </thead>
      <tbody>
        <Row onClick={() => setSubmissionModal(true)}>
          <BodyCell>Mark Adams</BodyCell>
          <BodyCell>
            <Date>October 15th 2020</Date>
          </BodyCell>
          <BodyCell>
            <File>hw1.zip</File>
          </BodyCell>
          <BodyCell>54</BodyCell>
        </Row>
        <Row onClick={() => setSubmissionModal(true)}>
          <BodyCell>Jacob Well</BodyCell>
          <BodyCell>
            <Date>October 13th 2020 {LATE}</Date>
          </BodyCell>
          <BodyCell>
            <File>cs470-hw-1.zip</File>
          </BodyCell>
          <BodyCell>89</BodyCell>
        </Row>
        <Row onClick={() => setSubmissionModal(true)}>
          <BodyCell>Larry Bird</BodyCell>
          <BodyCell>
            <Date>October 12th 2020</Date>
          </BodyCell>
          <BodyCell>
            <File>homework1.zip</File>
          </BodyCell>
          <BodyCell>-</BodyCell>
        </Row>
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  width: 100%;
`;

const HeadCell = styled.th`
  border: 1px solid rgb(217, 218, 219);
  background: #f8f9fa;
  padding: 8px 12px;
`;

const BodyCell = styled.td`
  border: 1px solid rgb(217, 218, 219);
  padding: 8px 12px;
`;

const Row = styled.tr`
  cursor: pointer;
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 8px;

  ${(props) => props.late && "color: hsl(350, 62.9%, 62%)"};
`;

const Late = styled.div`
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 5px;
  border-radius: 0.25rem;
  color: hsl(350, 62.9%, 62%);
  background: hsla(350, 62.9%, 62%, 0.2);
`;

const File = styled.div`
  border-radius: 100px;
  display: inline-block;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 2px 8px;
  color: #6173db !important;
  border-color: #6173db;
  background: rgba(97, 115, 219, 0.2);
`;

export default Submissions;
