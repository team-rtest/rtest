import React, { useState } from "react";
import styled from "styled-components";

import { Card } from "components";

import CreateAssignmentModal from "./../CreateAssignment/CreateAssignment";
import CreateAssignmentGroupModal from "./../CreateAssignmentGroup/CreateAssignmentGroup";

function EditCourse() {
  const [createAssignmentModal, setCreateAssignmentModal] = useState(false);
  const [createAssignmentGroupModal, setCreateAssignmentGroupModal] = useState(
    false
  );

  const openCreateAssignmentModal = () => {
    setCreateAssignmentModal(true);
  };

  const openCreateAssignmentGroupModal = () => {
    setCreateAssignmentGroupModal(true);
  };

  return (
    <Box>
      {createAssignmentModal && (
        <CreateAssignmentModal
          closeModal={() => setCreateAssignmentModal(false)}
        />
      )}
      {createAssignmentGroupModal && (
        <CreateAssignmentGroupModal
          closeModal={() => setCreateAssignmentGroupModal(false)}
        />
      )}
      <Scroll>
        <Group>
          <GroupHeading>
            Labs
            <Edit>
              <i className="fa fa-edit"></i>
            </Edit>
          </GroupHeading>
          <hr />
          <Assignments>
            <Assignment>
              <i className="fa fa-file-alt"></i> K Nearest Neighbors
            </Assignment>
            <Assignment>
              <i className="fa fa-file-alt"></i> Decision Tree
            </Assignment>
            <Assignment>
              <i className="fa fa-file-alt"></i> Apriori Algorithm
            </Assignment>
            <Assignment>
              <i className="fa fa-file-alt"></i> Naive Bayes
            </Assignment>
            <Assignment>
              <i className="fa fa-file-alt"></i> Random Forests
            </Assignment>
            <CreateAssignment onClick={openCreateAssignmentModal}>
              <i className="fa fa-plus-circle"></i> Create Assignment
            </CreateAssignment>
          </Assignments>
        </Group>
        <Group>
          <GroupHeading>
            Exams
            <Edit>
              <i className="fa fa-edit"></i>
            </Edit>
          </GroupHeading>
          <hr />
          <Assignments>
            <Assignment>
              <i className="fa fa-file-alt"></i> Exam 1
            </Assignment>
            <Assignment>
              <i className="fa fa-file-alt"></i> Exam 2
            </Assignment>
            <Assignment>
              <i className="fa fa-file-alt"></i> Exam 3
            </Assignment>
            <CreateAssignment>
              <i className="fa fa-plus-circle"></i> Create Assignment
            </CreateAssignment>
          </Assignments>
        </Group>
        <CreateGroup onClick={openCreateAssignmentGroupModal}>
          <Group>
            <CreateCourseGroupGroupHeading>
              <i className="fa fa-plus-circle"></i> Assignment Group
            </CreateCourseGroupGroupHeading>
          </Group>
        </CreateGroup>
      </Scroll>
    </Box>
  );
}

const Box = styled.div`
  width: calc(100vw - 250px);

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`;

const Scroll = styled.div`
  padding: 20px;
  display: flex;
  grid-gap: 20px;
  align-items: flex-start;
  overflow-x: scroll;
`;

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

const Assignments = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const Assignment = styled.button`
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

const Edit = styled.button`
  all: unset;
  color: darkgray;
  font-size: 1rem;
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

const CreateGroup = styled.button`
  all: unset;
  // min-width: 280px;
  // width: 280px;
  // background: rgb(0, 0, 0, 0.05);
  // border: none;
  // border-radius: 0.25rem;
  // padding: 20px;
`;

const CreateCourseGroupGroupHeading = styled.h5`
  margin: 10px;
  font-weight: 600;
  display: flex;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0, 0.5);
`;

export default EditCourse;
