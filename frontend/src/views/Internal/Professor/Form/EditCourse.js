import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

import SideForm from "./SideForm";
import { Input, FileInput, Select } from "components";

const update = gql`
  mutation UpdateCourse($courseId: ID!, $courseData: CourseInput!) {
    updateCourse(courseId: $courseId, courseData: $courseData) {
      _id
    }
  }
`;

function EditCourse({ courseData, closeModal }) {
  const { id } = useParams();
  const [updateCourse] = useMutation(update);
  const [inputs, setInputs] = useState(courseData);
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleUpload = (file) => {
    // minio s3 syllabus upload here
  };

  const handleUpdate = (course) => {
    console.log(id, course);
    updateCourse({ variables: { courseId: id, courseData: course } });
  };

  const handleSubmit = () => {
    const course = {
      name: inputs.name,
      courseNumber: inputs.courseNumber,
      semester: inputs.semester,
    };

    const errors = {
      name: !inputs.name,
      courseNumber: !inputs.courseNumber,
      semester: !inputs.semester,
    };

    const valid = course.name && course.courseNumber && course.semester;

    if (valid) {
      handleUpload();
      handleUpdate(course);
      closeModal();
    } else {
      setErrors(errors);
    }
  };

  return (
    <SideForm title="Edit Course" button="Save" closeModal={closeModal} onSubmit={handleSubmit}>
      <Input
        name="name"
        label="Name"
        value={inputs.name}
        error={errors.name}
        onChange={handleChange}
      />
      <Input
        name="courseNumber"
        label="Number"
        value={inputs.courseNumber}
        error={errors.courseNumber}
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
