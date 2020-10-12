import React from "react";
import styled from "styled-components";

function Members({ inputs, errors, handleChange }) {
  return (
    <Inputs>
      <Heading> Members </Heading>
      <Input
        name="professor"
        value={inputs.professor}
        error={errors.professor}
        onChange={handleChange}
      />
    </Inputs>
  );
}

const Inputs = styled.div`
  display: grid;
  grid-gap: 20px;
  width: 300px;
`;

const Heading = styled.h2`
  margin-bottom: 0;
`;

export default Members;
