import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ClassCard from './ClassCard';
import { Card } from 'components';

function CourseCreate({ selected, setSelected, assignments }) {
  const PLUS = <Plus className = {'fa fa-plus-circle'}/>;
  const courses = [
    { id: 'CS470-001', name: 'Data Mining', bgcolor:'#32a852' },
    { id: 'CS325-002', name: 'Artificial Intelligence', bgcolor:'#7732a8' },
    { id: 'CS334-001', name: 'Machine Learning', bgcolor:'#a83246' },
    { id: 'CS377-001', name: 'Database Systems', bgcolor:'#eba226' },
  ]

  return (
    <Dashboard>
      <Heading>Create or Review Courses</Heading>
  <Grid>{ courses.map(course => <ClassCard {...course} />) }<Link to ='course-create/form' ><AddClass><h4>{PLUS} Add Class</h4></AddClass></Link></Grid> 
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

const AddClass = styled.button`
background-color: #f8f9fa;
color: rgba(0,0,0,0.75);
font-weight: 600;
margin-bottom: 0;
padding: 20px;
align-items: center;
height: 10rem;
border-radius: 4px;
border-color:rgb(217,218,219);
border-style: solid;
border-width: 2px;
width: 20rem;
`;
const Plus = styled.span`
  font-size: 1.5rem;
  color: black;
  opacity: 0.75;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 325px 325px 325px;
  grid-gap: 30px;
`

export default CourseCreate;