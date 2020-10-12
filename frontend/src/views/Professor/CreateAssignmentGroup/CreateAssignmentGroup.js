import React, { useState } from 'react';
import styled from 'styled-components';

import { Card, Input, FileInput } from 'components';
import Upload from 'views/Upload'

function CreateAssignmentGroup({ closeModal }) {
  const [inputs, setInputs] = useState({ group_name: '', group_type: '', grading_policy: '', grading_weight: '' });
  const [errors, setErrors] = useState({ group_name: null, group_type: null, grading_policy: null, grading_weight: null });

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: !value });
  }

  return (
    <Overlay>
      <CreateAssignmentCard>
        <Head>
          <Heading>Create Assignment Group</Heading>
        </Head>
        <Body>
          <Inputs>
            <Input
              name="group_name"
              value={inputs.group_name}
              error={errors.group_name}
              onChange={handleChange}
            />
            <Input
              name="group_type"
              value={inputs.group_type}
              error={errors.group_type}
              onChange={handleChange}
            />
            <InputRow>
              <Input
                name="grading_policy"
                value={inputs.grading_policy}
                error={errors.grading_policy}
                onChange={handleChange}
              />
              <Input
                name="grading_weight"
                value={inputs.grading_weight}
                error={errors.grading_weight}
                onChange={handleChange}
              />
            </InputRow>
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

export default CreateAssignmentGroup;
