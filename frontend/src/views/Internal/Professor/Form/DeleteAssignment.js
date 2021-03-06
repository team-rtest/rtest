import React from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

import { gql, useMutation } from "@apollo/client";
import { Card } from "components";

const del = gql`
  mutation DeleteAssignment($id: ID!) {
    deleteAssignment(id: $id) {
      _id
    }
  }
`;

function DeleteAssignment({ id, closeModal }) {
  const history = useHistory();
  const [deleteAssignment] = useMutation(del);

  const handleSubmit = () => {
    deleteAssignment({ variables: { id } })
      .then(() => {
        history.goBack();
        window.location.reload();
      })
      .catch(() => alert("Could not delete assignment"));
  };

  return (
    <Overlay>
      <SubmissionCard>
        <Head>
          <Heading>Delete Assignment </Heading>
        </Head>
        <Body>
          <Label>Are you sure you want to delete this assignment ?</Label>
        </Body>
        <Foot>
          <Button className="btn btn-secondary" onClick={closeModal}>
            Cancel
          </Button>
          <DeleteButton onClick={handleSubmit}>Delete</DeleteButton>
        </Foot>
      </SubmissionCard>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubmissionCard = styled(Card)`
  width: 400px;

  @media only screen and (max-width: 600px) {
    width: 90vw;
  }
`;

const DeleteButton = styled.button`
  cursor: pointer;
  align-items: center;
  padding: 10px 15px;
  border-radius: 0.25rem;
  font-weight: 500;
  color: white;
  background: hsl(350, 62.9%, 62%);
  border: none;
`;

const Head = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h3`
  font-weight: 600;
`;

const Body = styled.div`
  padding: 20px;
  background: white;
  display: grid;
  grid-gap: 20px;
`;

const Foot = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  grid-gap: 10px;
`;

const Button = styled.button`
  width: inherit;
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 2px;
  font-size: 0.9rem;
  color: grey;
`;

export default DeleteAssignment;
