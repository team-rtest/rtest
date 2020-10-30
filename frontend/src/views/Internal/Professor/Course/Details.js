import React from "react";
import styled from "styled-components";

import { Card } from "components";

function Details({ semester, code }) {
  return (
    <Box>
      <Info>
        <Label>Semester</Label>
        <Value>{semester}</Value>
      </Info>

      <Info>
        <Label>Course Number</Label>
        <Value>{code}</Value>
      </Info>
    </Box>
  );
}

const Box = styled(Card)`
  display: grid;
  grid-gap: 20px;
  padding: 15px;
  width: 300px;
`;

const Info = styled.div``;

const Label = styled.div`
  color: gray;
  font-size: 0.9rem;
  font-weight: 500;
`;

const Value = styled.div`
  color: black;
  font-size: 1.1rem;
  font-weight: 600;
`;

const File = styled.div`
  border-radius: 100px;
  display: inline-block;
  font-weight: 500;
  font-size: 1rem;
  padding: 2px 8px;
  color: #6173db;
  border-color: #6173db;
  background: rgba(97, 115, 219, 0.2);
`;

export default Details;
