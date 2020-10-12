import React from "react";
import styled from "styled-components";

import AssignmentType from "./AssignmentType";

function AssignmentList({ assignments, selected, setSelected }) {
  return (
    <TypeList>
      {assignments.map((type) => (
        <AssignmentType
          type={type}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </TypeList>
  );
}

const TypeList = styled.div`
  min-width: 350px;
  height: 100%;
  overflow-y: auto;
`;

export default AssignmentList;
