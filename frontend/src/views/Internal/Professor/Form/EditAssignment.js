import React from "react";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";
import useForm from "./utils/useForm";

import SideForm from "./SideForm";
import { Input, FileInput, Select } from "components";

const mutation = gql`
  mutation UpdateAssignment($id: ID!, $assignment: AssignmentInput!) {
    updateAssignment(id: $id, assignment: $assignment) {
      _id
    }
  }
`;

function EditAssignment({ assignmentData, assignmentGroups, closeModal }) {
  const id = assignmentData._id;
  const [update] = useMutation(mutation);
  const { inputs, errors, loading, handleChange, handleSubmit } = useForm({
    data: assignmentData,
    names: ["name", "maxGrade", "dateDue", "instructions"],
    check: ["name", "maxGrade", "dateDue"],
    onSubmit,
  });

  async function onSubmit() {
    const { name, maxGrade, dateDue, instructions } = inputs;
    const assignment = { name, maxGrade, dateDue, instructions };
    const variables = { id, assignment };
    return update({ variables }).then(() => closeModal());
  }

  return (
    <SideForm
      title="Edit Assignment"
      button="Save"
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
      <Select
        name="group"
        label="Assignment Group"
        value={inputs.group}
        error={errors.group}
        options={assignmentGroups}
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

export default EditAssignment;
