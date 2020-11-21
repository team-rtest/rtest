import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import SideForm from "./SideForm";
import { Input, FileInput, Select } from "components";
import useForm from "./utils/useForm";

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
  const { inputs, errors, loading, handleChange, handleSubmit } = useForm({
    names: ["name", "code", "semester", "syllabus"],
    check: ["name", "code", "semester"],
    onSubmit,
  });

  useState(() => {
    data && history.push(`/professor/course/${data.createCourse._id}`);
  }, [data, history]);

  async function onSubmit() {
    const { name, code, semester } = inputs;
    const course = { name, code, semester };
    const variables = { course };
    return create({ variables });
  }

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
        label="Code"
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
