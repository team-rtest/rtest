import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Card } from "components";

function Course({
  id,
  number,
  name,
  grade,
  professor,
  numAssignments,
  numLate,
  pinned,
}) {
  // getNumAssignments
  // getNumAssignmentsLate
  // getOverallGrade
  // getNextAssignment

  const STAR = <Star className={`fa${pinned ? "s" : "r"} fa-star`} />;
  const PATH = `/course/${id.toLowerCase()}/summary`;

  return (
    <Box className="card">
      <Head>
        <Info>
          {STAR} {id.split("-")[0]}
        </Info>
        <Score>{grade}%</Score>
      </Head>
      <Name>{name}</Name>
      <Professor>{professor}</Professor>
      <Next>
        <Value>Lab 2: Apriori Algorithm</Value>
        <Date>September 18th 2020</Date>
      </Next>
      <Button className="btn btn-upload" to="/student/course/cs470">
        Explore
      </Button>
    </Box>
  );
}

const Box = styled(Card)`
  padding: 20px;
`;

const Head = styled.h5`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Star = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  margin-bottom: 3px;
  margin-right: 6px;
  color: gold;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.h4`
  color: #6173db;
  font-weight: 600;
  margin-bottom: 0;
`;

const Score = styled.div`
  width: auto;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 6px 8px;
  border-radius: 0.25rem;
  color: #6173db;
  background: rgba(97, 115, 219, 0.2);
`;

const Professor = styled.div`
  font-size: 1rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 6px;
  margin: 6px 0;
`;

const Tag = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 5rem;
  ${(props) => {
    switch (props.type) {
      case "primary":
        return `
          color: #6173DB;
          background: rgba(97, 115, 219, 0.2);
        `;

      case "danger":
        return `
          color: hsl(350, 62.9%, 62%);
          background: hsla(350, 62.9%, 62%, 0.2);
        `;

      default:
        return ``;
    }
  }}
`;

const Next = styled.div`
  background: rgb(218, 223, 244);
  // border: 1px solid rgba(0,0,0,.2);
  padding: 15px;
  margin: 10px 0;
  border-radius: 0.25rem;
`;

const Label = styled.div`
  color: grey;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Value = styled.h5`
  color: black;
  font-weight: 600;
  margin-bottom: 4px;
`;

const Date = styled.div`
  color: #6173db;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Button = styled(Link)``;

{
  /* <Tags>
  <Tag type="primary"> {numAssignments} Assignments Due </Tag>
  {!numLate || <Tag type="danger"> {numLate} Assignments Late </Tag>}
</Tags>; */
}

export default Course;
