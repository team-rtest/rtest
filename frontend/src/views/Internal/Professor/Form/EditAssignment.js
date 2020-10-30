import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { gql, useMutation } from "@apollo/client";

import SideForm from "./SideForm";
import { Input, FileInput, Select } from "components";

const update = gql`
  mutation UpdateAssignment($assignmentId: ID!, $assignmentData: AssignmentInput!) {
    updateAssignment(assignmentId: $assignmentId, assignmentData: $assignmentData) {
      _id
    }
  }
`;

function EditAssignment({ assignmentData, assignmentGroups, closeModal }) {
  const { id } = useParams();
  const [updateAssignment] = useMutation(update);
  const [inputs, setInputs] = useState(assignmentData);
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleUpload = (file) => {
    // minio s3 syllabus upload here
  };

  const handleUpdate = (assignment) => {
    updateAssignment({ variables: { assignmentId: id, assignmentData: assignment } });
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
      handleUpdate();
    } else {
      setErrors(errors);
    }
  };

  return (
    <SideForm title="Edit Assignment" button="Save" closeModal={closeModal} onSubmit={handleSubmit}>
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
