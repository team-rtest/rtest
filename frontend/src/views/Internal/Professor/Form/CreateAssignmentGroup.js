import React from "react";
import styled from "styled-components";

import SideForm from "./SideForm";
import { Input, Select } from "components";
import useForm from "./utils/useForm";

import { gql, useMutation } from "@apollo/client";

const mutation = gql`
  mutation CreateAssignmentGroup($courseId: ID!, $assignmentGroup: AssignmentGroupInput) {
    createAssignmentGroup(courseId: $courseId, assignmentGroup: $assignmentGroup) {
      _id
    }
  }
`;

function CreateAssignmentGroup({ courseId, closeModal }) {
  const [create] = useMutation(mutation);
  const { inputs, errors, loading, handleChange, handleSubmit } = useForm({
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
    const variables = { courseId, assignmentGroup };
    return create({ variables });
  }

  return (
    <SideForm
      title="Create Assignment Group"
      button="Create"
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
        <Select
          name="policy"
          label="Grading Policy"
          value={inputs.policy}
          error={errors.policy}
          options={["Normal", "Drop 1", "Drop 2", "Drop 3", "Drop 4", "Drop 5"]}
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

export default CreateAssignmentGroup;
