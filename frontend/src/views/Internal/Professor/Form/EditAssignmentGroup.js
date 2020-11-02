import React from "react";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";
import useForm from "./utils/useForm";

import SideForm from "./SideForm";
import { Input, Select } from "components";

const mutation = gql`
  mutation UpdateAssignmentGroup($id: ID!, $assignmentGroup: AssignmentGroupInput!) {
    updateAssignmentGroup(id: $id, assignmentGroup: $assignmentGroup) {
      _id
    }
  }
`;

function EditAssignmentGroup({ assignmentGroupData, closeModal }) {
  console.log(assignmentGroupData);
  const id = assignmentGroupData._id;
  const [update] = useMutation(mutation);
  const { inputs, errors, loading, handleChange, handleSubmit } = useForm({
    data: {
      name: assignmentGroupData.name,
      tag: assignmentGroupData.tag,
      policy: assignmentGroupData.grading.policy,
      weight: assignmentGroupData.grading.weight,
    },
    names: ["name", "tag", "policy", "weight"],
    check: ["name", "tag", "policy", "weight"],
    onSubmit,
  });

  async function onSubmit() {
    const assignmentGroup = {
      name: inputs.name,
      tag: inputs.tag,
      grading: {
        policy: inputs.policy,
        weight: inputs.weight,
      },
    };
    const variables = { id, assignmentGroup };
    return update({ variables }).then(() => closeModal());
  }

  return (
    <SideForm
      title="Edit Assignment Group"
      button="Save"
      loading={loading}
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
      <Select
        name="tag"
        label="Group Type"
        value={inputs.tag}
        error={errors.tag}
        options={["Homework", "Classwork", "Lab", "Quiz", "Test", "Exam"]}
        onChange={handleChange}
      />
      <InputRow>
        <Input
          name="policy"
          label="Grading Policy"
          value={inputs.policy}
          error={errors.policy}
          options
          onChange={handleChange}
        />
        <Input
          name="weight"
          label="Grading Weight (in percent)"
          type="number"
          value={inputs.weight}
          error={errors.weight}
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

export default EditAssignmentGroup;
