import React, { useState } from "react";
import { useParams } from "react-router-dom";
import updateCourse from "api/update";
import { gql, useMutation } from "@apollo/client";

import SideForm from "./SideForm";
import { Input, FileInput, Select } from "components";

const mutation = gql`
  mutation UpdateCourse($id: ID!, $course: CourseInput!) {
    updateCourse(id: $id, course: $course) {
      _id
    }
  }
`;

function EditCourse({ courseData, closeModal }) {
  const { id } = useParams();
  const [update] = useMutation(mutation);
  const [inputs, setInputs] = useState(courseData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    updateCourse(inputs)
      .then((course) => update({ variables: { id, course } }))
      .catch((errors) => setErrors(errors))
      .finally(() => setLoading(false));
  };

  return (
    <SideForm
      title="Edit Course"
      button="Save"
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

export default EditCourse;
