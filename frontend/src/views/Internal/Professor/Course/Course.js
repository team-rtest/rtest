import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import Review from "views/Internal/Professor/Course/Review/Review";
import EditCourse from "views/Internal/Professor/Form/EditCourse";
import DeleteCourse from "views/Internal/Professor/Form/DeleteCourse";

import Details from "./Details";
import Assignments from "./Assignments";
import Students from "./Students";

import { Loader } from "components";

const query = gql`
  query FetchCourse($id: ID!) {
    course(id: $id) {
      _id
      name
      code
      semester
      assignmentGroups {
        _id
        name
        tag
        grading {
          policy
          weight
        }
        assignments {
          _id
          name
        }
      }
    }
  }
`;

function Course() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(query, { variables: { id } });

  const tabs = ["Details", "Assignments", "Students", "Review"];
  const [selected, setSelected] = useState("Details");

  const [editCourseModal, setEditCourseModal] = useState(false);
  const [deleteCourseModal, setDeleteCourseModal] = useState(false);

  if (loading) return <PageLoader />;
  if (error) return <p>Error: {error.message}</p>;

  const { course } = data;

  const content = {
    Details: <Details {...course} />,
    Assignments: <Assignments {...course} />,
    Students: <Students {...course} />,
    Review: <Review {...course} />,
  };

  if (!course) return <div>Course does not exist</div>;

  return (
    <Box>
      {editCourseModal && (
        <EditCourse courseData={course} closeModal={() => setEditCourseModal(false)} />
      )}
      {deleteCourseModal && (
        <DeleteCourse id={course._id} closeModal={() => setDeleteCourseModal(false)} />
      )}
      <Header>
        <Heading>{course.name}</Heading>
        <Buttons>
          <EditButton onClick={() => setEditCourseModal(true)}>
            <i className="fa fa-pencil" />
            Edit Course
          </EditButton>
          <DeleteButton onClick={() => setDeleteCourseModal(true)}>
            <i className="fa fa-trash" />
            Delete Course
          </DeleteButton>
        </Buttons>
      </Header>
      <Tabs>
        {tabs.map((tab) => (
          <Tab active={tab === selected} onClick={() => setSelected(tab)}>
            {tab}
          </Tab>
        ))}
      </Tabs>
      <Content>{content[selected]}</Content>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  padding: 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 30px;
  }
`;

const Heading = styled.h1`
  font-weight: 600;
  margin-bottom: 15px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 10px;
`;

const EditButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  grid-gap: 10px;
  padding: 10px 15px;
  border-radius: 0.25rem;
  font-weight: 500;
  color: white;
  background: #6173db;
  border: none;
`;

const DeleteButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  grid-gap: 10px;
  padding: 10px 15px;
  border-radius: 0.25rem;
  font-weight: 500;
  color: white;
  background: hsl(350, 62.9%, 62%);
  border: none;
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 5px;
`;

const Tab = styled.button`
  all: unset;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 0.25rem;

  color: grey;
  background: white;

  font-weight: 500;

  ${(props) =>
    props.active &&
    `
    color: #6173db;
    background: rgba(97, 115, 219, 0.2);
  `}
`;

const PageLoader = styled(Loader)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  padding: 20px 0;
`;

export default Course;
