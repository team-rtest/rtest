import React from "react";
import styled from "styled-components";

import { Card } from "components";

function formatDate(value) {
  const date = new Date(value.split("Z")[0]);
  const year = parseInt(date.getYear()) + 1900;
  const month = parseInt(date.getMonth());
  const day = date.getDate();

  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${MONTHS[month]} ${day}, ${year}`;
}

function addDay(epoch) {
  const ONE_DAY = 86400000;
  return epoch + ONE_DAY - 1;
}

function substractDay(epoch) {
  const ONE_DAY = 86400000;
  return epoch - ONE_DAY + 1;
}

function Details({ maxGrade, dateDue, optional, locked }) {
  return (
    <Box>
      <Info>
        <Label>Due Date</Label>
        <Value>{formatDate(dateDue)}</Value>
      </Info>

      <Info>
        <Label>Max Grade</Label>
        <Value>{maxGrade}</Value>
      </Info>

      <Info>
        <Label>Instructions File</Label>
        <File>CS334_HW1.pdf</File>
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
