import React from "react";
import styled from "styled-components";

import SideForm from "./SideForm";
import { Input, FileInput } from "components";
import useForm from "./utils/useForm";

import { gql, useMutation } from "@apollo/client";

const mutation = gql`
  mutation CreateAssignment($assignmentGroupId: ID!, $assignment: AssignmentInput) {
    createAssignment(assignmentGroupId: $assignmentGroupId, assignment: $assignment) {
      _id
    }
  }
`;

function CreateAssignment({ assignmentGroupId, closeModal }) {
  const [create] = useMutation(mutation);
  const { inputs, errors, loading, handleChange, handleSubmit } = useForm({
    names: ["name", "maxGrade", "dateDue", "instructions"],
    check: ["name", "maxGrade", "dateDue"],
    onSubmit,
  });

  async function onSubmit() {
    const { name, maxGrade, dateDue, instructions } = inputs;
    const assignment = { name, maxGrade, dateDue, instructions };
    const variables = { assignmentGroupId, assignment };
    return create({ variables }).then(() => closeModal());
  }

  return (
    <SideForm
      title="Create Assignment"
      button="Create"
      loading={loading}
      closeModal={closeModal}
      onSubmit={handleSubmit}
    >
      <Input
        name="name"
        label="Assignment Name"
        value={inputs.name}
        error={errors.name}
        onChange={handleChange}
      />
      <InputRow>
        <Input
          name="maxGrade"
          label="Maximum Grade"
          type="number"
          value={inputs.maxGrade}
          error={errors.maxGrade}
          onChange={handleChange}
        />
        <Input
          name="dateDue"
          label="Due Date"
          type="time"
          value={inputs.dateDue}
          error={errors.dateDue}
          onChange={handleChange}
        />
      </InputRow>
      <FileInput
        name="instructions"
        label="Instructions"
        type="file"
        value={inputs.instructions}
        error={errors.instructions}
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
