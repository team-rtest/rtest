import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import EditAssignmentModal from "views/Internal/Professor/Form/EditAssignment";
import DeleteAssignmentModal from "views/Internal/Professor/Form/DeleteAssignment";

import Details from "./Details";
import Submissions from "./Submissions";

import { Loader } from "components";

const query = gql`
  query FetchAssignment($id: ID!) {
    assignment(id: $id) {
      _id
      name
      maxGrade
      dateDue
      optional
      locked
    }
  }
`;

function AssignmentPage() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(query, { variables: { id } });

  const tabs = ["Details", "Submissions", "Review"];
  const [selected, setSelected] = useState("Details");
  const [editAssignmentModal, setEditAssignmentModal] = useState(false);
  const [deleteAssignmentModal, setDeleteAssignmentModal] = useState(false);

  if (loading) return <PageLoader />;
  if (error) return <p>Error: {error.message}</p>;

  const { assignment } = data;

  const content = {
    Details: <Details {...assignment} />,
    Submissions: <Submissions {...assignment} />,
  };

  if (!assignment) return <div>Assignment does not exist</div>;

  console.log(data);

  return (
    <Box>
      {editAssignmentModal && (
        <EditAssignmentModal
          assignmentData={assignment}
          closeModal={() => setEditAssignmentModal(false)}
        />
      )}
      {deleteAssignmentModal && (
        <DeleteAssignmentModal
          id={assignment._id}
          closeModal={() => setDeleteAssignmentModal(false)}
        />
      )}
      <Header>
        <Heading>{assignment.name}</Heading>
        <Buttons>
          <EditButton onClick={() => setEditAssignmentModal(true)}>
            <i className="fa fa-pencil" />
            Edit Assignment
          </EditButton>
          <DeleteButton onClick={() => setDeleteAssignmentModal(true)}>
            <i className="fa fa-trash" />
            Delete Assignment
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
  width: calc(100vw - 250px);
  padding: 30px;
  overflow-y: auto;

  @media (max-width: 600px) {
    width: 100vw;
  }
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
  margin-top: 20px;
  flex-direction: row;
  grid-gap: 5px;
`;

const PageLoader = styled(Loader)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

export default AssignmentPage;
