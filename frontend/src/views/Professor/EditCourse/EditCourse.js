import React from 'react';
import styled from 'styled-components';

import { Card } from 'components';

function EditCourse() {
  return (
    <Box>
      <Scroll>
        <Group>
          <GroupHeading> Labs <Edit><i className="fa fa-edit"></i></Edit> </GroupHeading>
          <hr />
          <Assignments>
            <Assignment><i className="fa fa-file-alt"></i> K Nearest Neighbors </Assignment>
            <Assignment><i className="fa fa-file-alt"></i> Decision Tree </Assignment>
            <Assignment><i className="fa fa-file-alt"></i> Apriori Algorithm </Assignment>
            <Assignment><i className="fa fa-file-alt"></i> Naive Bayes </Assignment>
            <Assignment><i className="fa fa-file-alt"></i> Random Forests </Assignment>
            <CreateAssignment><i className="fa fa-plus-circle"></i> Create Assignment </CreateAssignment>
          </Assignments>
        </Group>
        <Group>
          <GroupHeading> Quizzes <Edit><i className="fa fa-edit"></i></Edit> </GroupHeading>
          <hr />
          <Assignments>
            <Assignment> <i className="fa fa-file-alt"></i> Supervised Learning </Assignment>
            <Assignment> <i className="fa fa-file-alt"></i> Unsupervised Learning </Assignment>
            <Assignment> <i className="fa fa-file-alt"></i> Reinforcement Learning </Assignment>
            <Assignment> <i className="fa fa-file-alt"></i> Deep Learning </Assignment>
            <CreateAssignment><i className="fa fa-plus-circle"></i> Create Assignment </CreateAssignment>
          </Assignments>
        </Group>
        <Group>
          <GroupHeading> Tests <Edit><i className="fa fa-edit"></i></Edit> </GroupHeading>
          <hr />
          <Assignments>
            <Assignment> <i className="fa fa-file-alt"></i> Exam 1 </Assignment>
            <Assignment> <i className="fa fa-file-alt"></i> Exam 2 </Assignment>
            <Assignment> <i className="fa fa-file-alt"></i> Exam 3 </Assignment>
            <CreateAssignment><i className="fa fa-plus-circle"></i> Create Assignment </CreateAssignment>
          </Assignments>
        </Group>
        <CreateGroup>
          <CreateCourseGroupGroupHeading>
            <i className="fa fa-plus-circle"></i> Assignment Group
          </CreateCourseGroupGroupHeading>
        </CreateGroup>
      </Scroll>
    </Box>
  )
}

const Box = styled.div`
  width: 100vw;
`;

const Scroll = styled.div`
  padding: 20px;
  display: flex;
  grid-gap: 20px;
  align-items: flex-start;
  overflow-y: scroll;
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

  color: #6173DB !important;
  // border: 1px solid #6173DB;
  border: none;
  background: rgba(97, 115, 219, 0.2);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 240px;

  & ${FileIcon} {
    color: #6173DB;
  }

  & ${FileName} {
    color: #6173DB;
  }
`;

const Heading = styled.h2`
  margin: 20px;
  display: flex;
  grid-gap: 10px;
  align-items: center;
  font-weight: 600;
  margin-bottom: 0;
`;

const Number = styled.span`
  color: #6173DB !important;
  border-radius: 100px;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 10px 15px;

  border: none;
  background: rgba(97, 115, 219, 0.2);
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
  min-width: 280px;
  width: 280px;
  color: rgb(0, 0, 0, 0.5);
  background: rgb(0, 0, 0, 0.05);
  // border: 1px solid rgb(0, 0, 0, 0.1);
  border: none;
  border-radius: 0.25rem;
  padding: 20px;
`;

const CreateCourseGroupGroupHeading = styled.h5`
  margin-bottom: 0;
  font-weight: 600;
  display: flex;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
`;

export default EditCourse;
