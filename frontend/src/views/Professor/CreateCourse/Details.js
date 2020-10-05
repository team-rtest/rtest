import React from 'react';
import styled from 'styled-components';

import { Input, FileInput } from 'components';

function Details({ inputs, errors, handleChange }) {
  return (
    <Inputs>
      <Input
        name = "subject"
        placeholder="Computer Science"
        value={inputs.subject}
        error={errors.subject}
        onChange={handleChange}
      />
      <Input
        name = "number"
        placeholder="CS470"
        value={inputs.number}
        error={errors.number}
        onChange={handleChange}
      />
      <Input
        name = "name"
        placeholder="Data Mining"
        value={inputs.name}
        error={errors.name}
        onChange={handleChange}
      />
      <Input
        name = "semester"
        placeholder="Fall 2020"
        value={inputs.semester}
        error={errors.semester}
        onChange={handleChange}
      />
    <FileInput
        name = "syllabus"
        placeholder="Fall 2020"
        value={inputs.syllabus}
        error={errors.syllabus}
        onChange={handleChange}
      />
    </Inputs>
  )
}

const Inputs = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export default Details;
