import React, { useState } from 'react';
import styled from 'styled-components';

import Course from './Course'

function Courses({ selected, setSelected, assignments }) {

  const courses = [
    { id: 'CS470-001', name: 'Data Mining', professor: 'Davide Fossati', numAssignments: 6, numLate: 3, grade: 58, pinned: true, theme: 'primary' },
    { id: 'CS325-002', name: 'Artificial Intelligence', professor: 'Steven La Fleur', numAssignments: 5, numLate: 0, grade: 83, pinned: false, theme: 'succes' },
    { id: 'CS334-001', name: 'Machine Learning', professor: 'Joyce Ho', numAssignments: 8, numLate: 0, grade: 97, pinned: false, theme: 'danger' },
    { id: 'CS377-001', name: 'Database Systems', professor: 'Shun Yan Cheung', numAssignments: 10, numLate: 0, grade: 77, pinned: false, theme: 'warning' },
  ]

  return (
    <Dashboard>
      <Heading>Your Courses</Heading>
      <Grid>{ courses.map(course => <Course {...course} />) }</Grid>
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  grid-gap: 30px;
`

export default Courses;
