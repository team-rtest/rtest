import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { createCourse } from "api/create";
import { useCreate } from "api/hooks";

import SideForm from "./SideForm";
import { Input, FileInput } from "components";

function CreateCourse({ closeModal }) {
  const history = useHistory();
  const [setCourse, data] = useCreate(createCourse);
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: !value });
  };

  const handleSubmit = () => {
    const course = {
      name: inputs.course_name,
      courseNumber: inputs.course_number,
      semester: inputs.semester,
    };

    setCourse({ variables: { course } });
  };

  useEffect(() => {
    data && history.push("course/" + data._id);
  }, [data, history]);

  return (
    <SideForm title="Create Course" button="Create" closeModal={closeModal} onSubmit={handleSubmit}>
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
      <FileInput
        name="syllabus"
        value={inputs.syllabus}
        error={errors.syllabus}
        onChange={handleChange}
      />
    </SideForm>
  );
}

export default CreateCourse;
