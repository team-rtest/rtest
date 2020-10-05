import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Card } from "components";

function Course({ id, name, color, pinned }) {
  const STAR = <Star filled={pinned} className={"fas fa-star"} />;
  const ID = id.split("-")[0];
  const PATH = `/classcard/${id.toLowerCase()}`;
  return (
    <Box color={color}>
      <Head>
        <Name>{name}</Name>
        {STAR}
      </Head>
      <Students>65 Students</Students>
    </Box>
  );
}

const Box = styled(Card)`
  display: block;
  background: ${(props) => props.color};
  padding: 20px;
  align-items: center;
  height: 10rem;
  border-width: 2px;
`;

const Top = styled.div`
  display: flex;
  grid-gap: 5px;
  align-items: center;
  font-weight: 600;
  font-size: 1.3rem;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Star = styled.div`
  cursor: pointer;
  color: ${(props) => (props.filled ? "gold" : "rgba(0, 0, 0, 0.2)")};
  font-size: 1.25rem;
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

export default Course;
