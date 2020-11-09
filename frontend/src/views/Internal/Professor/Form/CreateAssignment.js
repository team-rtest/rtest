import React from "react";
import styled from "styled-components";

import SideForm from "./SideForm";
import { Input, FileInput, Checkbox } from "components";
import useForm from "./utils/useForm";

import { gql, useMutation } from "@apollo/client";

const mutation = gql`
  mutation CreateAssignment($assignmentGroupId: ID!, $assignment: AssignmentInput) {
    createAssignment(assignmentGroupId: $assignmentGroupId, assignment: $assignment) {
      _id
    }
  }
`;

function addDay(epoch) {
  const ONE_DAY = 86400000;
  return epoch + ONE_DAY - 1;
}

function CreateAssignment({ assignmentGroupId, closeModal }) {
  const [create] = useMutation(mutation);
  const { inputs, errors, loading, handleChange, handleSubmit } = useForm({
    names: ["name", "maxGrade", "dateDue", "optional", "locked", "instructions"],
    check: ["name", "maxGrade", "dateDue"],
    onSubmit,
  });

  async function onSubmit() {
    const { name, maxGrade, dateDue, optional, locked } = inputs;
    const assignment = {
      name,
      maxGrade,
      dateDue: addDay(new Date(dateDue).getTime()),
      optional,
      locked,
    };
    const variables = { assignmentGroupId, assignment };
    console.log(variables);
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
      <div>
        <Checkbox
          name="optional"
          label="Optional (does not count for grade)"
          value={inputs.optional}
          error={errors.optional}
          onChange={handleChange}
        />
        <Checkbox
          name="locked"
          label="Locked (student cannot view instructions)"
          value={inputs.locked}
          error={errors.locked}
          onChange={handleChange}
        />
      </div>
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
          type="date"
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
