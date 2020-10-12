import React from "react";
import styled from "styled-components";

import { Input, FileInput } from "components";

function Details({ inputs, errors, handleChange }) {
  return (
    <Inputs>
      <Input
        name="course_number"
        value={inputs.course_number}
        error={errors.course_number}
        onChange={handleChange}
      />
      <Input
        name="course_name"
        value={inputs.course_name}
        error={errors.course_name}
        onChange={handleChange}
      />
      <Input
        name="semester"
        value={inputs.semester}
        error={errors.semester}
        onChange={handleChange}
      />
      <Input
        name="assistants"
        value={inputs.assistants}
        error={errors.assistants}
        onChange={handleChange}
      />
      <FileInput
        name="syllabus"
        placeholder="Fall 2020"
        value={inputs.syllabus}
        error={errors.syllabus}
        onChange={handleChange}
      />
      <button className="btn btn-upload"> Submit </button>
    </Inputs>
  );
}

const Inputs = styled.div`
  display: grid;
  grid-gap: 20px;
  width: 300px;
`;

export default Details;
