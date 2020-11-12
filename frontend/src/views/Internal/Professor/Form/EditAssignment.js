import React from "react";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";
import useForm from "./utils/useForm";

import SideForm from "./SideForm";
import { Input, FileInput, Checkbox } from "components";

const mutation = gql`
  mutation UpdateAssignment($id: ID!, $assignment: AssignmentInput!) {
    updateAssignment(id: $id, assignment: $assignment) {
      _id
    }
  }
`;

function formatDate(value) {
  const padLeft = (value, digit, length) => {
    value = value + ""; // convert to string
    while (value.length < length) {
      // keep padding until required length is met
      value = digit + value; // pad with digit to the left
    }
    return value;
  };

  const epoch = new Date(value).getTime();
  const date = new Date(substractDay(epoch));
  const year = parseInt(date.getYear()) + 1900;
  const month = padLeft(parseInt(date.getMonth()) + 1, "0", 2);
  const day = padLeft(date.getDate(), "0", 2);

  return `${year}-${month}-${day}`;
}

function addDay(epoch) {
  const ONE_DAY = 86400000;
  return epoch + ONE_DAY - 1;
}

function substractDay(epoch) {
  const ONE_DAY = 86400000;
  return epoch - ONE_DAY + 1;
}

function EditAssignment({ assignmentData, closeModal }) {
  const id = assignmentData._id;
  const [update] = useMutation(mutation);
  const { inputs, errors, loading, handleChange, handleSubmit } = useForm({
    data: { ...assignmentData, dateDue: formatDate(assignmentData.dateDue) },
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
      optional: !!optional,
      locked: !!locked,
    };
    console.log(assignment);
    const variables = { id, assignment };
    return update({ variables });
  }

  return (
    <SideForm
      title="Edit Assignment"
      button="Save"
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

export default EditAssignment;
