import React, { useState } from 'react';
import styled from 'styled-components';

import { Form, Input, Card } from 'components'
import { AuthCard, AuthForm, Heading, AuthLink } from "../Auth/styles";

function CourseCreateForm(){
    const [inputs, setInputs] = useState({ course_name: '', course_ID: '', number_of_sections: ''});
    const [errors, setErrors] = useState({ course_name: null, course_ID: null, number_of_sections: null});

    const handleChange = (name, value) => {
        setInputs({ ...inputs, [name]: value });
        setErrors({ ...errors, [name]: validate(name, value) });
      }
    const validate = (name, value) => {
        switch(name) {
          default: return !value;
        }
      }
    return(
        <AuthCard>
            <Heading>Create Course</Heading>
            <AuthForm>
            <Input
                name = "course_name"
                value={inputs.course_name}
                error={errors.course_name}
                onChange={handleChange}
            />
            <Input
                name = "course_ID"
                value={inputs.course_ID}
                error={errors.course_ID}
                onChange={handleChange}
            />
            <Label>Syllabus:</Label> <button class="btn btn-primary btn-upload">Upload</button>
            <Input
                name = "number_of_sections"
                value={inputs.number_of_sections}
                error={errors.number_of_sections}
                onChange={handleChange}
            />
            </AuthForm>
        </AuthCard>
    );
}
const Label = styled.label`
  text-transform: capitalize;
  margin-bottom: 2px;
  font-size: 0.9rem;
  color: grey;
`;
export default CourseCreateForm;