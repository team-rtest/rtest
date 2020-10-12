import React, { useState } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

import { Card } from 'components';

import Details from './Details';
import Members from './Members';

function CreateCourse() {
  const history = useHistory();
  const [index, setIndex] = useState(0);
  const [inputs, setInputs] = useState({ subject: 'Computer Science', name: 'Data Mining', number: 'CS470', semester: 'Fall 2020', syllabus: '', professor: 'Davide Fossati', assistants: '', students: '' });
  const [errors, setErrors] = useState({ subject: null, name: null, number: null, semester: null, syllabus: null, professor: null, assistants: null, students: null });

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: !value });
  }

  const current = ['Details', 'Members'];
  const n = current.length - 1;

  const handleBack = () => {
    if(index > 0) {
      setIndex(index - 1);
    }
  }

  const handleNext = () => {
    if(index < n) {
      setIndex(index + 1);
    }
  }

  const handleSubmit = () => {
    history.push('/professor/edit-course');
  }

  return(
    <Box>
      <CourseCard>
        <CourseForm>
          <Header>
            <Heading> Course {current[index]} </Heading>
            <Buttons>
              {index !== 0 && <Button onClick={handleBack} className="btn btn-secondary">Back</Button>}
              {index !== n && <Button onClick={handleNext} className="btn btn-upload text-white">Next</Button>}
              {index === n && <Button onClick={handleSubmit} className="btn btn-upload text-white">Submit</Button>}
            </Buttons>
          </Header>
          { current[index] === 'Details'   && <Details  inputs={inputs} errors={errors} handleChange={handleChange} /> }
          { current[index] === 'Members'   && <Members  inputs={inputs} errors={errors} handleChange={handleChange} /> }
          <MobileButtons>
            {index !== 0 && <Button onClick={handleBack} className="btn btn-secondary">Back</Button>}
            {index !== n && <Button onClick={handleNext} className="btn btn-upload text-white">Next</Button>}
            {index === n && <Button onClick={handleSubmit} className="btn btn-upload text-white">Submit</Button>}
          </MobileButtons>
        </CourseForm>
      </CourseCard>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  margin-bottom: auto;
  padding: 30px;
  // background: #f8f9fa;
  min-height: calc(100vh - 80px);
`;

const CourseCard = styled(Card)`
  padding: 25px;
  width: 500px;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Buttons = styled.div`
  display: flex;
  grid-gap: 10px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const MobileButtons = styled.div`
  display: none;
  grid-gap: 10px;
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    display: flex;
    float: right;
  }
`;

const Heading = styled.h2`
  font-weight: 600;
`;

const CourseForm = styled.div`

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

export default CreateCourse;
