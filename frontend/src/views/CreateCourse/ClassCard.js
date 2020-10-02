import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Card } from 'components';

function ClassCard({ id, name, color}) {
  const STAR_HOLLOW = <StarHollow className = {'far fa-star'}/>;
  const STAR_FILLED = <StarFilled className = {'fas fa-star'}/>;
  const ID = id.split('-')[0];
  const PATH = `/classcard/${id.toLowerCase()}`;
  return (
    <Box color={color}>
      <Head>
        <Name>{ name }</Name>
        {STAR_FILLED}
      </Head>
      <Students>
        65 Students
      </Students>
    </Box>
  );
}

const Box = styled(Card)`
  display: block;
  background: ${props => props.color};
  padding: 20px;
  align-items: center;
  height: 10rem;
  border-width: 2px;
  width: 20rem;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StarHollow = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.5);
`;

const StarFilled = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  color: gold;
`;

const Name = styled.h4`
  color: black;
  opacity: 0.75;
  font-weight: 600;
  margin-bottom: 0;
`;

const Students = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
`;

const Label = styled.div`
  color: black;
  font-weight: 600;
  margin-top: 15px;
`;

export default ClassCard;
