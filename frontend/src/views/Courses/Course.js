import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Card } from 'components';

function Course({ id, name, grade, professor, numAssignments, numLate, pinned }) {

  // getNumAssignments
  // getNumAssignmentsLate
  // getOverallGrade
  // getNextAssignment

  const STAR = <Star className={`fa${pinned ? 's' : 'r'} fa-star`} />;
  const ID = id.split('-')[0];
  const PATH = `/courses/${id.toLowerCase()}`;

  return (
    <Box>
      <Head>
        <Info>{ STAR } { ID }</Info>
        <Score>{ grade }%</Score>
      </Head>
      <Name>{ name }</Name>
      <Professor>{ professor }</Professor>
      <Tags>
        <Tag type="primary"> {numAssignments} Assignments </Tag>
        {!numLate || <Tag type="danger"> {numLate} Late Assignments </Tag>}
      </Tags>
      <Next>
        <Label>Next Assignment</Label> Lab 2: Apriori Algorithm
        <Label>Due Date</Label> September 18th 2020
      </Next>
      <Link to={PATH} className="btn btn-upload text-white"> Explore </Link>
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
  color: #6173DB;
  font-weight: 600;
  margin-bottom: 0;
`;

const Score = styled.div`
  width: auto;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 6px 8px;
  border-radius: 0.25rem;
  color: #6173DB;
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
  ${props => {
    switch(props.type) {
      case 'primary':
        return `
          color: #6173DB;
          background: rgba(97, 115, 219, 0.2);
        `;

      case 'danger':
        return `
          color: hsl(350, 62.9%, 62%);
          background: hsla(350, 62.9%, 62%, 0.2);
        `;
    }
  }}
`;

const Next = styled.div`
  color: grey;
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

const Label = styled.div`
  color: black;
  font-weight: 600;
  margin-top: 15px;
`;

export default Course;
