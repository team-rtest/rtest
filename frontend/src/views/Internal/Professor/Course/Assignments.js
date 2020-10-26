import React, { useState } from "react";
import styled from "styled-components";

import { Card } from "components";
import AssignmentGroup from "./AssignmentGroup";

import CreateAssignmentGroupModal from "views/Internal/Professor/Form/CreateAssignmentGroup";

function Assignments({ assignmentGroups }) {
  const [createAssignmentGroupModal, setCreateAssignmentGroupModal] = useState(false);

  const openCreateAssignmentGroupModal = () => {
    setCreateAssignmentGroupModal(true);
  };

  return (
    <Box>
      {createAssignmentGroupModal && (
        <CreateAssignmentGroupModal closeModal={() => setCreateAssignmentGroupModal(false)} />
      )}
      <Scroll>
        {assignmentGroups && assignmentGroups.map((group) => <AssignmentGroup {...group} />)}
        <CreateGroup onClick={openCreateAssignmentGroupModal}>
          <Group>
            <GroupHeading>
              <i className="fa fa-plus-circle"></i> Assignment Group
            </GroupHeading>
          </Group>
        </CreateGroup>
      </Scroll>
    </Box>
  );
}

const Box = styled.div``;

const Group = styled(Card)`
  min-width: 280px;
  padding: 20px;
`;

const Scroll = styled.div`
  display: flex;
  grid-gap: 20px;
  align-items: flex-start;
  overflow-x: scroll;
`;

const CreateGroup = styled.button`
  all: unset;
  // min-width: 280px;
  // width: 280px;
  // background: rgb(0, 0, 0, 0.05);
  // border: none;
  // border-radius: 0.25rem;
  // padding: 20px;
`;

const GroupHeading = styled.h5`
  margin: 10px;
  font-weight: 600;
  display: flex;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0, 0.5);
`;

export default Assignments;
