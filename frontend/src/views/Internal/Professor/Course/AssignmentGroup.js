import React, { useState } from "react";
import styled from "styled-components";

import CreateAssignmentModal from "views/Internal/Professor/Form/CreateAssignment";
import EditAssignmentGroupModal from "views/Internal/Professor/Form/EditAssignmentGroup";

import { Card } from "components";
import { Link } from "react-router-dom";

function AssignmentGroup({ name, tag, grading, assignments }) {
  const [createAssignmentModal, setCreateAssignmentModal] = useState(false);
  const [editAssignmentGroupModal, setEditAssignmentGroupModal] = useState(false);

  return (
    <Group>
      {createAssignmentModal && (
        <CreateAssignmentModal closeModal={() => setCreateAssignmentModal(false)} />
      )}
      {editAssignmentGroupModal && (
        <EditAssignmentGroupModal closeModal={() => setEditAssignmentGroupModal(false)} />
      )}
      <GroupHeading>
        {name}
        <button className="btn btn-upload" onClick={() => setEditAssignmentGroupModal(true)}>
          Edit
        </button>
      </GroupHeading>
      <hr />
      <AssignmentList>
        {assignments &&
          assignments.map((assignment) => (
            <Assignment to={`/professor/assignment/${assignment._id}`}>
              <i className="fa fa-file-alt"></i> {assignment.name}
            </Assignment>
          ))}
        <CreateAssignment onClick={() => setCreateAssignmentModal(true)}>
          <i className="fa fa-plus-circle"></i> Create Assignment
        </CreateAssignment>
      </AssignmentList>
    </Group>
  );
}

const Group = styled(Card)`
  min-width: 280px;
  padding: 20px;
`;

const FileIcon = styled.span`
  color: grey;
`;

const FileName = styled.span`
  font-weight: 500;
`;

const AssignmentList = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const Assignment = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  grid-gap: 10px;
  padding: 10px 15px;
  border-radius: 0.25rem;

  font-weight: 500;

  color: #6173db !important;
  // border: 1px solid #6173DB;
  border: none;
  background: rgba(97, 115, 219, 0.2);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 240px;

  & ${FileIcon} {
    color: #6173db;
  }

  & ${FileName} {
    color: #6173db;
  }
`;

const GroupHeading = styled.h5`
  margin-bottom: 0;
  font-weight: 600;
  display: flex;
  grid-gap: 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
`;

const Weight = styled.span`
  all: unset;
  color: darkgray;
  font-size: 1.2rem;
`;

const CreateAssignment = styled.button`
  all: unset;
  display: flex;
  font-weight: 500;
  align-items: center;
  grid-gap: 8px;
  padding: 0 10px;
  padding: 10px 15px;
  color: rgb(0, 0, 0, 0.5);
  background: rgb(0, 0, 0, 0.05);
  border-radius: 0.25rem;
`;

export default AssignmentGroup;
