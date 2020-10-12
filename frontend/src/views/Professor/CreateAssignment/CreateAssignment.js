import React, { useState } from 'react';
import styled from 'styled-components';

import { Card, Input, FileInput } from 'components';
import Upload from 'views/Upload'

function CreateAssignment({ closeModal }) {
  const [inputs, setInputs] = useState({ assignment_name: '', assignment_group: '', max_grade: '', due_date: '', assignment_instructions: '' });
  const [errors, setErrors] = useState({ assignment_name: null, assignment_group: null, max_grade: null, due_date: null, assignment_instructions: null });

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: !value });
  }

  return (
    <Overlay>
      <CreateAssignmentCard>
        <Head>
          <Heading>Create Assignment</Heading>
        </Head>
        <Body>
          <Inputs>
            <Input
              name="assignment_name"
              value={inputs.assignment_name}
              error={errors.assignment_name}
              onChange={handleChange}
            />
            <Input
              name="assignment_group"
              value={inputs.assignment_group}
              error={errors.assignment_group}
              onChange={handleChange}
            />
            <InputRow>
              <Input
                name="max_grade"
                value={inputs.max_grade}
                error={errors.max_grade}
                onChange={handleChange}
              />
              <Input
                name="due_date"
                value={inputs.due_date}
                error={errors.due_date}
                onChange={handleChange}
              />
            </InputRow>
            <FileInput
              name="assignment_instructions"
              type="file"
              value={inputs.assignment_instructions}
              error={errors.assignment_instructions}
              onChange={handleChange}
            />
          </Inputs>
        </Body>
        <Foot>
          <Button className="btn text-white btn-secondary" onClick={closeModal}>Close</Button>
          <Button className="btn text-white btn-upload" onClick={closeModal}>Create</Button>
        </Foot>
      </CreateAssignmentCard>
    </Overlay>
  )
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

const CreateAssignmentCard = styled(Card)`
  width: 500px;

  @media only screen and (max-width: 600px) {
    width: 90vw;
  }
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
`;

const Inputs = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const InputRow = styled.div`
  display: flex;
  grid-gap: 20px;

  & > * {
    flex: 1;
  }
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

export default CreateAssignment;
