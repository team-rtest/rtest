import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Card } from 'components';

function ClassCard({ id, name, bgcolor}) {

  const DOTS = <Dots className = {'fa fa-ellipsis-h'}/>;
  const ID = id.split('-')[0];
  const PATH = `/classcard/${id.toLowerCase()}`;

  return (
    <Box style = {{backgroundColor: bgcolor}}>
      {DOTS}
      <Name>{ name }</Name>
    </Box>
  );
}
const Dots = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  padding-right: 0.7rem;
  padding-top: 0.5rem;
  top: 0;
  right: 0;
  color: black;
  opacity: 0.3;
`;

const Box = styled(Card)`
  padding: 20px;
  align-items: center;
  height: 10rem;
  width: 20rem;
`;

const Name = styled.h4`
  color: black;
  opacity: 0.75;
  font-weight: 600;
  margin-bottom: 0;
`;

const Label = styled.div`
  color: black;
  font-weight: 600;
  margin-top: 15px;
`;

export default ClassCard;
