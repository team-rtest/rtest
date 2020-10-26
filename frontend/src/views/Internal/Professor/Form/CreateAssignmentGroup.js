import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SideForm from "./SideForm";
import { Input } from "components";

function CreateAssignmentGroup({ closeModal }) {
  const [inputs, setInputs] = useState({
    group_name: "",
    group_type: "",
    grading_policy: "",
    grading_weight: "",
  });
  const [errors, setErrors] = useState({
    group_name: null,
    group_type: null,
    grading_policy: null,
    grading_weight: null,
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: !value });
  };

  const createAssignmentGroup = () => {
    // TODO: Create an assignment group using GraphQL
    //
    // input AssignmentGroupInput {
    //   name: String!
    //   courseId: ID!
    //   tag: String!
    //   grading: GradingRules!
    // }
    //
    // "courseId" is not included in AssignmentGroup schema
  };

  return (
    <SideForm
      title="Create Assignment Group"
      button="Create"
      closeModal={closeModal}
      onSubmit={createAssignmentGroup}
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
