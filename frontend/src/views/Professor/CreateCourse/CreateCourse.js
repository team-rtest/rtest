import React, { useState } from "react";
import styled from "styled-components";

import Details from "./Details";

function CreateCourse() {
  const [inputs, setInputs] = useState({
    course_name: "",
    course_number: "",
    semester: "",
    syllabus: "",
    assistants: "",
  });

  const [errors, setErrors] = useState({
    course_name: null,
    course_number: null,
    semester: null,
    syllabus: null,
    assistants: null,
  });

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: !value });
  };

  return (
    <Box>
      <Details inputs={inputs} errors={errors} handleChange={handleChange} />
    </Box>
  );
}

const Box = styled.div`
  padding: 30px;
  display: flex;
  grid-gap: 50px;
  background: #f8f9fa;
`;

export default CreateCourse;
