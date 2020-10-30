import React, { useState } from "react";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";

import SideForm from "./SideForm";
import { Input, FileInput, Select } from "components";

const create = gql`
  mutation CreateAssignment($assignment: AssignmentInput) {
    createAssignment(assignment: $assignment) {
      _id
    }
  }
`;

function CreateAssignment({ selectedAssignmentGroup, assignmentGroups, closeModal }) {
  const [createAssignment] = useMutation(create);
  const [inputs, setInputs] = useState({ group: selectedAssignmentGroup });
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleUpload = (file) => {
    // minio s3 syllabus upload here
  };

  const handleCreate = (assignment) => {
    createAssignment({ variables: { assignment } });
  };

  const handleSubmit = () => {
    const assignmentGroup = assignmentGroups.find((group) => inputs.group === group.name);
    const assignmentGroupId = assignmentGroup && assignmentGroup._id;

    const assignment = {
      name: inputs.name,
      maxGrade: inputs.maxGrade,
      dateDue: inputs.dateDue,
      optional: inputs.optional,
      locked: inputs.locked,
      assignmentGroupId,
    };

    const errors = {
      name: !inputs.name,
      maxGrade: !inputs.maxGrade,
      dateDue: !inputs.dateDue,
    };

    const valid = assignment.name && assignment.maxGrade && assignment.dateDue;

    if (valid) {
      handleUpload();
      handleCreate();
    } else {
      setErrors(errors);
    }
  };

  return (
    <SideForm
      title="Create Assignment"
      button="Create"
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

export default CreateAssignment;
