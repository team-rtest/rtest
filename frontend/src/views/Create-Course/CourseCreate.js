import React, { useState } from 'react';
import styled from 'styled-components';

import ClassCard from './ClassCard';
import { Card } from 'components';

function CourseCreate({ selected, setSelected, assignments }) {

  const courses = [
    { id: 'CS470-001', name: 'Data Mining', bgcolor:'#f2b3e5' },
    { id: 'CS325-002', name: 'Artificial Intelligence', bgcolor:'#c1f7e5' },
    { id: 'CS334-001', name: 'Machine Learning', bgcolor:'#eef5c4' },
    { id: 'CS377-001', name: 'Database Systems', bgcolor:'#cfc4f5' },
  ]

  return (
    <Dashboard>
      <Heading>Create or Review Courses</Heading>
      <Grid>{ courses.map(course => <ClassCard {...course} />) }<AddClass /></Grid>
    </Dashboard>
  );
}

const Dashboard = styled.div`
  min-height: calc(100vh - 80px);
  width: 100%;
  padding: 50px;
`;

const Heading = styled.h1`
  font-weight: 600;
  margin-bottom: 25px;
`;

const AddClass = styled(Card)`
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 325px 325px 325px;
  grid-gap: 30px;
`

export default CourseCreate;