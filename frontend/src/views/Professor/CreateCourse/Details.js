import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
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
      <Button className="btn btn-upload" to="/professor/edit-course">
        Submit
      </Button>
    </Inputs>
  );
}

const Inputs = styled.div`
  display: grid;
  grid-gap: 20px;
  width: 300px;
`;

const Button = styled(Link)``;

export default Details;
