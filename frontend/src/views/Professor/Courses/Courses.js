import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Course from './Course';
import { Card } from 'components';

function Courses({ selected, setSelected, assignments }) {
  const PLUS = <Plus className = {'fa fa-plus-circle'}/>;

  const courses = [
    { id: 'CS470-001', name: 'Data Mining', color:'#ff695e', pinned: true },
    { id: 'CS325-002', name: 'Artificial Intelligence', color:'#ff851b' },
    { id: 'CS334-001', name: 'Machine Learning', color:'#2ecc40' },
    { id: 'CS377-001', name: 'Database Systems', color:'#54c8ff' },
  ]

  return (
    <Dashboard>
      <Heading>Your Courses</Heading>
      <Grid>
        { courses.map(course => <Course {...course} />) }
        <AddClass to="/professor/create-course">
          <h4>{PLUS} Add Class</h4>
        </AddClass>
      </Grid>
    </Dashboard>
  );
}

const Dashboard = styled.div`
  min-height: calc(100vh - 69px);
  width: 100%;
  padding: 30px;
`;

const Heading = styled.h1`
  font-weight: 600;
  margin-bottom: 25px;
`;

const AddClass = styled(Link)`
  background-color: #f8f9fa;
  color: rgba(0,0,0,0.75);
  font-weight: 600;
  margin-bottom: 0;
  padding: 20px;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 2px solid rgb(217,218,219);

  &:hover {
    text-decoration: none;
    color: rgba(0,0,0,0.75);
  }
`;

const Plus = styled.span`
  font-size: 1.5rem;
  color: rgba(0,0,0,0.75);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  flex-wrap: wrap;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`

export default Courses;
