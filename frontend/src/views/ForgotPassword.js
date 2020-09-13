import React, { useState } from 'react';
import styled from 'styled-components';

import { Form, Input, Card } from 'components'
import { AuthCard, AuthForm, Heading, Link } from './styles'

function ForgotPassword() {
  const [inputs, setInputs] = useState({ email: '' });
  const [errors, setErrors] = useState({ email: null });

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: validateEmail(value) });
  }

  const validateEmail = value => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValid = emailRegex.test(value.toLowerCase())
    if(!emailValid) return 'Email is invalid';
  }

  const handleSubmit = () => {
    setErrors({ email: validateEmail(inputs.email) });
    if(inputs.email && !errors.email) {
      alert('form submitted successfully!');
    }
  }

  return (
      <AuthCard>
        <Heading> Forgot Password </Heading>
        <AuthForm handleSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            value={inputs.email}
            error={errors.email}
            onChange={handleChange}
          />
        <button className="btn btn-primary btn-upload" onClick={handleSubmit}> Send Password Reset Email </button>
        </AuthForm>
        <Link> Return to login </Link>
      </AuthCard>
  );
}

export default ForgotPassword;
