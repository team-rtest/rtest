import React from "react";
import styled from "styled-components";

import AssignmentType from "./AssignmentType";

function AssignmentList({ data }) {
  console.log(data);
  return (
    <TypeList>
      {data.course.assignmentGroups.map((type) => (
        <AssignmentType
          key = {type._id}
          type={type}
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
