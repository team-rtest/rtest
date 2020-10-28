import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import Details from "./Details";
import Assignments from "./Assignments";
import Students from "./Students";

function Course() {
  const [selected, setSelected] = useState("Details");
  const tabs = ["Details", "Assignments", "Students", "Review"];

  const query = gql`
    query {
      course(id: $id) {
        name
        courseNumber
        semester
        students {
          firstName
          lastName
        }
        assignmentGroups {
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

  const { id } = useParams();

  const { data, loading, error } = useQuery(query, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { course } = data;

  const content = {
    Details: <Details {...course} />,
    Assignments: <Assignments {...course} />,
    Students: <Students {...course} />,
  };

  return (
    <Box>
      <Header>
        <Heading>{course.name}</Heading>
        <Buttons>
          <EditButton>
            <i className="fa fa-pencil" />
            Edit Course
          </EditButton>
          <DeleteButton>
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

const Content = styled.div`
  padding: 20px 0;
`;

export default Course;
