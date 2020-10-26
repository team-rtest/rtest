import React, { useState } from "react";
import styled from "styled-components";

import EditAssignment from "./EditAssignment";
import Details from "./Details";
import Submissions from "./Submissions";

function AssignmentPage() {
  const [editModal, setEditModal] = useState(false);
  const [selected, setSelected] = useState("Details");
  const tabs = ["Details", "Submissions", "Review"];

  const content = {
    Details: <Details />,
    Submissions: <Submissions />,
  };

  return (
    <Box>
      {editModal && <EditAssignment closeModal={() => setEditModal(false)} />}
      <Header>
        <Heading>K Nearest Neighbors</Heading>
        <Buttons>
          <EditButton onClick={() => setEditModal(true)}>
            <i className="fa fa-pencil" />
            Edit Assignment
          </EditButton>
          <DeleteButton>
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
