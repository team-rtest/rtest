import React, { useState } from "react";
import styled from "styled-components";

import { createAssignment } from "api/create";
import { useCreate } from "api/hooks";

import SideForm from "./SideForm";
import { Select, Input, FileInput } from "components";

function CreateAssignment({ selected, assignmentGroups, closeModal }) {
  const [setAssignment, data] = useCreate(createAssignment);
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: !value });
  };

  const handleSubmit = () => {
    const assignment = {
      name: inputs.assignment_name,
      maxGrade: parseInt(inputs.max_grade),
      dateDue: new Date(inputs.due_date),
      optional: inputs.optional,
      locked: inputs.locked,
      assignmentGroupId: inputs.assignmentGroup && inputs.assignmentGroup.id,
    };

    setAssignment({ variables: { assignment } });
  };

  // input AssignmentInput {
  //   name: String
  //   body: String
  //   maxGrade: Int
  //   dateDue: Timestamp
  //   optional: Boolean
  //   locked: Boolean
  //   assignmentGroupId: ID!
  // }

  return (
    <SideForm
      title="Create Assignment"
      button="Create"
      closeModal={closeModal}
      onSubmit={handleSubmit}
    >
      <Input
        name="assignment_name"
        value={inputs.assignment_name}
        error={errors.assignment_name}
        onChange={handleChange}
      />
      <Select
        name="assignment_group"
        value={inputs.assignment_group}
        error={errors.assignment_group}
        options={assignmentGroups}
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
          type="time"
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
