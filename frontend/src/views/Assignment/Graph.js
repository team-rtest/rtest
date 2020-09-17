import React from 'react';
import styled from 'styled-components';

function Graph() {
  return (
    <Box>
      <Axis>
        <Tick>100</Tick>
        <Tick>80</Tick>
        <Tick>60</Tick>
        <Tick>40</Tick>
        <Tick>20</Tick>
        <Tick>0</Tick>
      </Axis>
      <Bars n={8}>
        <Item score={45}>
          <Bar></Bar>
          <Label>Quiz 0</Label>
        </Item>
        <Item score={55}>
          <Bar></Bar>
          <Label>Quiz 1</Label>
        </Item>
        <Item score={85}>
          <Bar></Bar>
          <Label>Quiz 2</Label>
        </Item>
        <Item score={70}>
          <Bar></Bar>
          <Label>Quiz 3</Label>
        </Item>
        <Item score={65}>
          <Bar></Bar>
          <Label>Quiz 4</Label>
        </Item>
        <Item score={55}>
          <Bar></Bar>
          <Label>Quiz 5</Label>
        </Item>
        <Item score={55}>
          <Bar></Bar>
          <Label>Quiz 6</Label>
        </Item>
        <Item score={45}>
          <Bar></Bar>
          <Label>Quiz 7</Label>
        </Item>
      </Bars>
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 90px;
`;

const Bars = styled.div`
  height: 300px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${props => props.n}, ${props => ((800 / props.n) > 80) ? 80 : (800 / props.n)}px);
  align-items: flex-end;
  border-bottom: 1px solid lightgrey;
`;

const Axis = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;
  border-right: 1px solid lightgrey;

`;

const Tick = styled.div`
  text-align: right;
  font-size: 0.9rem;
  font-weight: 600;
  color: grey;
`;

const Label = styled.h6`
  color: rgb(97, 115, 219);
  background: rgba(97, 115, 219, 0.2);
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 20px;
  padding: 5px 0;
  text-align: center;
  border-radius: 1rem;
  // text-transform: uppercase;
  font-weight: 700;
`;

const Item = styled.div`
  padding: 10px;
  height: ${props => props.score}%;
  // height: 100%;
`;

const Bar = styled.div`
  background: #6173db;
  border: 1px solid #4e5eb8;
  border-radius: 0.25rem;
  height: 100%;
`;

export default Graph
