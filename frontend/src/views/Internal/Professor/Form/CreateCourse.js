import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

import SideForm from "./SideForm";
import { Input, FileInput } from "components";

function CreateCourse({ closeModal }) {
  const history = useHistory();

  const [inputs, setInputs] = useState({
    course_name: "",
    course_number: "",
    semester: "",
    syllabus: "",
  });

  const [errors, setErrors] = useState({
    course_name: null,
    course_number: null,
    semester: null,
    syllabus: null,
  });

  const mutation = gql`
    mutation CreateCourse($course: Course) {
      createCourse(course: $course) {
        _id
      }
    }
  `;

  const [createCourse, { data }] = useMutation(mutation);

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

    createCourse({
      variables: {
        course,
      },
    });
  };

  useEffect(() => {
    data && history.push("course/" + data._id);
  }, [data]);

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
