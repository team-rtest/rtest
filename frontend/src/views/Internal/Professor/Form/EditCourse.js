import React from "react";
import { useParams } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import useForm from "./utils/useForm";

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
  const { inputs, errors, loading, handleChange, handleSubmit } = useForm({
    data: courseData,
    names: ["name", "code", "semester", "syllabus"],
    check: ["name", "code", "semester", "syllabus"],
    onSubmit,
  });

  const handleFileUpload = () => {
    const file = inputs.syllabus.files[0];
    // TODO: Upload Syllabus File
  };

  async function onSubmit() {
    const { name, code, semester } = inputs;
    const course = { name, code, semester };
    const variables = { id, course };
    return update({ variables }).then(() => {
      handleFileUpload();
      closeModal();
    });
  }

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

export default EditCourse;
