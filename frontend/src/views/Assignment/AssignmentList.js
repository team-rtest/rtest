import React, { useState } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

function AssignmentList({ selected, setSelected, assignments }) {
  return (
    <List>
      { assignments.map(({ id, name, description }) => (
        <AssignmentItem key={id} selected={id === selected} onClick={() => setSelected(id)}>
          <Heading>
            <Name>{ name }</Name>
            <Tag> 98/100 </Tag>
          </Heading>
          <Description>{ description }</Description>
        </AssignmentItem>
      )) }
    </List>
  );
}

const List = styled.div`
  width: 300px;
  height: calc100%;
  overflow-y: auto;
`;

const AssignmentItem = styled.div`
  cursor: pointer;
  height: 120px;
  padding: 20px;
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
`;

const Tag = styled.div`
  width: auto;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 6px 8px;
  // height: 25px;
  border-radius: 0.25rem;
  color: #6173DB;
  background: rgba(97, 115, 219, 0.2);
`;

export default AssignmentList;
