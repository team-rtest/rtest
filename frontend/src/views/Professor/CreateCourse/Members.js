import React from 'react';
import styled from 'styled-components';

import { Input } from 'components';

function Members({ inputs, errors, handleChange }) {
  return (
    <Inputs>
      <Input
        name="professor"
        value={inputs.professor}
        error={errors.professor}
        onChange={handleChange}
      />
      <Input
        name="assistants"
        value={inputs.assistants}
        error={errors.assistants}
        onChange={handleChange}
      />
      <Input
        name="students"
        value={inputs.students}
        error={errors.students}
        onChange={handleChange}
      />
    </Inputs>
  )
}

const Inputs = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export default Members;
