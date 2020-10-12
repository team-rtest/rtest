import React from "react";
import styled from "styled-components";

function Table({ assignments }) {
  const assignementList = assignments[0].list;

  return (
    <Box>
      <Head>
        <tr>
          <Heading></Heading>
          <Heading>Name</Heading>
          <Heading>Submission Date</Heading>
          <Heading>Due Date</Heading>
          <Heading>Grade</Heading>
        </tr>
      </Head>
      <Body>
        {assignementList.map((assignment, index) => (
          <tr>
            <Complete>{index}</Complete>
            <Name>{assignment.name.split(":")[1]}</Name>
            <Date>September 18th 2020</Date>
            <Date>September 18th 2020</Date>
            <Grade>
              <Score> 98 / 100 </Score>
            </Grade>
          </tr>
        ))}
      </Body>
    </Box>
  );
}

const Box = styled.table`
  margin-top: 30px;
  margin-bottom: 90px;
  width: 100%;
`;

const Head = styled.thead`
  border-bottom: 1px solid black;
`;

const Heading = styled.th`
  padding: 15px;
`;

const Body = styled.tbody``;

const Complete = styled.td`
  text-align: center;
  font-weight: 700;
`;

const Name = styled.td`
  padding: 15px;
`;

const Date = styled.td`
  padding: 15px;
  color: grey;
`;

const Grade = styled.td`
  padding: 15px;
`;

const Score = styled.div`
  // width: auto;
  // text-align: center;
  // font-size: 0.8rem;
  // font-weight: 500;
  // padding: 6px 8px;
  // border-radius: 0.25rem;
  // color: #6173DB;
  // background: rgba(97, 115, 219, 0.2);
`;

export default Table;
