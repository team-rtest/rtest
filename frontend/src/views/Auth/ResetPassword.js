import React, { useState } from 'react';
import styled from 'styled-components';

import { Input } from 'components'
import { AuthBox, AuthCard, AuthForm, Heading } from './styles'

function ResetPassword() {
  const [inputs, setInputs] = useState({ new_password: '', confirm_password: '' });
  const [errors, setErrors] = useState({ new_password: null, confirm_password: null });

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  }

  const validate = (name, value) => {
    switch(name) {
      case 'new_password':      return validateNewPassword(value);
      case 'confirm_password':  return validateConfirmPassword(value);
      default:                  return !value;
    }
  }

  const validateNewPassword = value => {
    if(value.length < 8) return 'Password must have at least 8 characters';
  }

  const validateConfirmPassword = value => {
    if(value !== inputs.new_password) return 'Password does not match';
  }

  const handleSubmit = () => {
    setErrors({
      new_password: validateNewPassword(inputs.new_password),
      confirm_password: validateConfirmPassword(inputs.confirm_password),
    });

    const noneEmpty = inputs.new_password && inputs.confirm_password
    const noneError = !errors.new_password && !errors.confirm_password

    if(noneEmpty && noneError) {
      alert('form submitted successfully!');
    }
  }

  return (
    <AuthBox>
      <AuthCard>
        <Heading> Reset Password </Heading>
        <AuthForm handleSubmit={handleSubmit}>
          <Input
            name="new_password"
            type="password"
            value={inputs.new_password}
            error={errors.new_password}
            onChange={handleChange}
          />
          <Input
            name="confirm_password"
            type="password"
            value={inputs.confirm_password}
            error={errors.confirm_password}
            onChange={handleChange}
          />
          <button className="btn btn-primary btn-upload" onClick={handleSubmit}> Confirm Reset </button>
        </AuthForm>
      </AuthCard>
    </AuthBox>
  );
}

export default ResetPassword;
