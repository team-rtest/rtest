import React, { useState } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import AssignmentType from './AssignmentType';

function AssignmentList({ assignments, selected, setSelected }) {
  return (
    <TypeList>
      { assignments.map(type => <AssignmentType type={type} selected={selected} setSelected={setSelected} />) }
    </TypeList>
  );
}

const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  grid-gap: 10px;
  border: 1px solid #eee;
  border-top: none;
`;

const Type = styled.div`

`;

const TypeName = styled.div`
  color: rgb(97, 115, 219);
  background: rgba(97, 115, 219, 0.2);
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 1rem;
  padding: 0 10px;
  text-transform: uppercase;
  font-weight: 700;
`;

const Arrow = styled.span`
  
`;

const TypeList = styled.div`
  width: 350px;
  height: 100%;
  overflow-y: auto;
`;

const Count = styled.div`
  color: rgb(108, 117, 125);
  background: rgb(108, 117, 125, 0.2);
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 1rem;
  padding: 0 10px;
  margin-left: auto;
`;

const List = styled.div`
  // background: #f8f9fa;
`;

const AssignmentItem = styled.div`
  cursor: pointer;
  padding: 25px;
  margin-top: -1px;
  border: 1px solid #eee;
  background: ${props => props.selected && 'rgba(97, 115, 219, 0.1)'};
`;

const Heading = styled.h5`
  display: flex;
  grid-gap: 10px;
  font-size: 1.25rem;
  font-weight: 600;
  justify-content: space-between;
  margin-bottom: 0;
`;

const Name = styled.span`
  overflow: hidden;
 text-overflow: ellipsis;
 display: -webkit-box;
 -webkit-line-clamp: 1;
 -webkit-box-orient: vertical;
`

const Description = styled.p`
  color: grey;
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   margin-bottom: 0;
`;

const Tag = styled.div`
  width: auto;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 6px 8px;
  border-radius: 0.25rem;
  color: #6173DB;
  background: rgba(97, 115, 219, 0.2);
`;

const Date = styled.div`
  color: grey;
  color: #6173DB;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 10px;
`;
export default AssignmentList;
