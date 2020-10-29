import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { createAssignmentGroup } from "api/create";
import { useCreate } from "api/hooks";

import SideForm from "./SideForm";
import { Input } from "components";

function CreateAssignmentGroup({ closeModal }) {
  const { id: courseId } = useParams();
  const [setAssignmentGroup] = useCreate(createAssignmentGroup);
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: !value });
  };

  const handleSubmit = () => {
    const assignmentGroup = {
      name: inputs.group_name,
      tag: inputs.group_type,
      courseId: courseId,
      grading: {
        weight: inputs.grading_weight,
        policy: inputs.grading_policy,
      },
    };

    setAssignmentGroup({ variables: { assignmentGroup } });
  };

  return (
    <SideForm
      title="Create Assignment Group"
      button="Create"
      closeModal={closeModal}
      onSubmit={handleSubmit}
    >
      <Input
        name="group_name"
        value={inputs.group_name}
        error={errors.group_name}
        onChange={handleChange}
      />
      <Input
        name="group_type"
        value={inputs.group_type}
        error={errors.group_type}
        onChange={handleChange}
      />
      <InputRow>
        <Input
          name="grading_policy"
          value={inputs.grading_policy}
          error={errors.grading_policy}
          onChange={handleChange}
        />
        <Input
          name="grading_weight"
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

export default CreateAssignmentGroup;
