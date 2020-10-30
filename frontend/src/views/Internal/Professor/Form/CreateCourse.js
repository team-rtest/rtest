import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { createCourse } from "api/create";
import SideForm from "./SideForm";
import { Input, FileInput, Select } from "components";

import { gql, useMutation } from "@apollo/client";

const mutation = gql`
  mutation CreateCourse($course: CourseInput) {
    createCourse(course: $course) {
      _id
    }
  }
`;

function CreateCourse({ closeModal }) {
  const history = useHistory();
  const [create, { data }] = useMutation(mutation);
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    createCourse(inputs)
      .then((course) => create({ variables: { course } }))
      .then(() => data && history.push(`/professor/course/${data.createCourse._id}`))
      .catch((errors) => setErrors(errors))
      .finally(() => setLoading(false));
  };

  return (
    <SideForm
      title="Create Course"
      button="Create"
      loading={loading}
      closeModal={closeModal}
      onSubmit={handleSubmit}
    >
      <Input
        name="name"
        label="Name"
        value={inputs.name}
        error={errors.name}
        onChange={handleChange}
      />
      <Input
        name="code"
        label="Number"
        value={inputs.code}
        error={errors.code}
        onChange={handleChange}
      />
      <Select
        name="semester"
        label="Semester"
        value={inputs.semester}
        error={errors.semester}
        options={["Spring 2020", "Fall 2020", "Spring 2021"]}
        onChange={handleChange}
      />
      <FileInput
        name="syllabus"
        label="Syllabus"
        value={inputs.syllabus}
        error={errors.syllabus}
        onChange={handleChange}
      />
    </SideForm>
  );
}

export default CreateCourse;
