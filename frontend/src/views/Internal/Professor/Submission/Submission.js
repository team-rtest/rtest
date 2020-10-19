import React, { useState } from "react";
import styled from "styled-components";

import { Card, Input } from "components";
import { Editor } from "primereact/editor";

function Submission({ closeModal }) {
  const [inputs, setInputs] = useState({
    grade: "",
    comment: "",
  });

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <Overlay>
      <SubmissionCard>
        <Head>
          <Heading>Grade Submission</Heading>
        </Head>
        <Body>
          <SubmissionFile>
            <Label>Submission File</Label>
            <File>
              <FileName>CS470_HW1.pdf</FileName>
              <FileIcon className="fa fa-download"></FileIcon>
            </File>
          </SubmissionFile>
          <Input
            name="grade"
            label
            value={inputs.grade}
            error={null}
            type="number"
            onChange={handleChange}
          />
          <EditorInput>
            <Label>Comments</Label>
            <Editor
              style={{ height: "200px" }}
              value={inputs.comment}
              onTextChange={(e) => setInputs({ ...inputs, comment: e.htmlValue })}
            />
          </EditorInput>
        </Body>
        <Foot>
          <Button className="btn btn-secondary" onClick={closeModal}>
            Close
          </Button>
          <Button className="btn btn-upload" onClick={closeModal}>
            Save
          </Button>
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
  width: 700px;

  @media only screen and (max-width: 600px) {
    width: 90vw;
  }
`;

const SubmissionFile = styled.div``;

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

const FileIcon = styled.span`
  color: grey;
`;

const FileName = styled.span`
  font-weight: 500;
`;

const File = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border: 1px solid lightgrey;
  width: 200px;
  padding: 10px 15px;
  border-radius: 0.25rem;

  color: #6173db !important;
  border-color: #6173db;
  background: rgba(97, 115, 219, 0.2);

  & ${FileIcon} {
    color: #6173db;
  }

  & ${FileName} {
    color: #6173db;
  }
`;

const EditorInput = styled.div``;

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
  text-transform: capitalize;
  margin-bottom: 2px;
  font-size: 0.9rem;
  color: grey;
`;

export default Submission;
