import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

import SideForm from "./SideForm";
import { Input, Select } from "components";

const create = gql`
  mutation CreateAssignmentGroup($assignmentGroup: AssignmentGroupInput) {
    createAssignmentGroup(assignmentGroup: $assignmentGroup) {
      _id
    }
  }
`;

function CreateAssignmentGroup({ closeModal }) {
  const { id: courseId } = useParams();
  const [createAssignmentGroup] = useMutation(create);
  const [inputs, setInputs] = useState({});
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
      createAssignmentGroup({ variables: { assignmentGroup } });
    } else {
      setErrors(errors);
    }
  };

  return (
    <SideForm
      title="Create Assignment Group"
      button="Create"
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

export default CreateAssignmentGroup;
