import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SideForm from "./SideForm";
import { Input, FileInput } from "components";

function CreateAssignment({ closeModal }) {
  const [inputs, setInputs] = useState({
    assignment_name: "",
    assignment_group: "",
    max_grade: "",
    due_date: "",
    assignment_instructions: "",
  });
  const [errors, setErrors] = useState({
    assignment_name: null,
    assignment_group: null,
    max_grade: null,
    due_date: null,
    assignment_instructions: null,
  });

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: !value });
  };

  const createAssignment = () => {
    // TODO: Create an assignment group using GraphQL
    //
    // input AssignmentInput {
    //   name: String!
    //   body: String
    //   assignmentGroupId: ID!
    //   maxGrade: Int
    //   dateDue: Timestamp
    //   tags: [AssignmentTag]
    // }
    //
    // "assignmentGroupId" is not included in Assignment schema
    // "body" is no longer used as an instructions file is uploaded instead
  };

  return (
    <SideForm
      title="Create Assignment"
      button="Create"
      closeModal={closeModal}
      onSubmit={createAssignment}
    >
      <Input
        name="assignment_name"
        value={inputs.assignment_name}
        error={errors.assignment_name}
        onChange={handleChange}
      />
      <Input
        name="assignment_group"
        value={inputs.assignment_group}
        error={errors.assignment_group}
        onChange={handleChange}
      />
      <InputRow>
        <Input
          name="max_grade"
          value={inputs.max_grade}
          error={errors.max_grade}
          onChange={handleChange}
        />
        <Input
          name="due_date"
          value={inputs.due_date}
          error={errors.due_date}
          onChange={handleChange}
        />
      </InputRow>
      <FileInput
        name="assignment_instructions"
        type="file"
        value={inputs.assignment_instructions}
        error={errors.assignment_instructions}
        onChange={handleChange}
      />
    </SideForm>
  );
}

const InputRow = styled.div`
  display: flex;
  grid-gap: 20px;

  & > * {
    flex: 1;
  }
`;

export default CreateAssignment;
