import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

import SideForm from "./SideForm";
import { Input } from "components";

const update = gql`
  mutation UpdateAssignmentGroup(
    $assignmentGroupId: ID!
    $assignmentGroupData: AssignmentGroupInput!
  ) {
    updateAssignmentGroup(
      assignmentGroupId: $assignmentGroupId
      assignmentGroupData: $assignmentGroupData
    ) {
      _id
    }
  }
`;

function UpdateAssignmentGroup({ assignmentGroupData, closeModal }) {
  const { id: courseId } = useParams();
  const [updateAssignmentGroup] = useMutation(update);
  const [inputs, setInputs] = useState(assignmentGroupData);
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = () => {
    const assignmentGroup = {
      name: inputs.name,
      tag: "TEST",
      courseId: courseId,
      grading: {
        weight: inputs.weight,
        policy: inputs.policy,
      },
    };

    const errors = {
      name: !inputs.name,
      tag: !inputs.tag,
      weight: !inputs.weight,
      policy: !inputs.policy,
    };

    const valid = inputs.name && inputs.tag && inputs.weight && inputs.policy;

    if (valid) {
      updateAssignmentGroup({
        variables: {
          assignmentGroupId: assignmentGroupData._id,
          assignmentGroupData: assignmentGroup,
        },
      });
    } else {
      setErrors(errors);
    }
  };

  return (
    <SideForm
      title="Edit Assignment Group"
      button="Save"
      closeModal={closeModal}
      onSubmit={handleSubmit}
    >
      <Input
        name="name"
        label="Group Name"
        value={inputs.name}
        error={errors.name}
        onChange={handleChange}
      />
      <Input
        name="group_type"
        label="Group Type"
        value={inputs.group_type}
        error={errors.group_type}
        onChange={handleChange}
      />
      <InputRow>
        <Input
          name="grading_policy"
          label="Grading Policy"
          value={inputs.grading_policy}
          error={errors.grading_policy}
          onChange={handleChange}
        />
        <Input
          name="grading_weight"
          label="Grading Weight"
          value={inputs.grading_weight}
          error={errors.grading_weight}
          onChange={handleChange}
        />
      </InputRow>
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

export default UpdateAssignmentGroup;
