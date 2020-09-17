import React, { useState } from "react";
import styled from "styled-components";

import { Form, Input, Card, Textarea } from "components";
import { AuthCard, AuthForm, Heading, AuthLink } from "./styles";

import { auth } from "api";

function Signup() {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: null, password: null });

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const validate = (name, value) => {
    switch (name) {
      // case 'email':     return validateEmail(value);
      case "password":
        return validatePassword(value);
      default:
        return !value;
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValid = emailRegex.test(value.toLowerCase());
    if (!emailValid) return "Email is invalid";
  };

  const validatePassword = (value) => {
    if (value.length < 8) return "Password must have at least 8 characters";
  };

  const handleSubmit = () => {
    setErrors({
      // email: validateEmail(inputs.email),
      password: validatePassword(inputs.password),
    });

    const noneEmpty = inputs.email && inputs.password;
    const noneError = !errors.email && !errors.password;

    if (noneEmpty && noneError) {
      alert("form submitted successfully!");
      const res = auth.signup(inputs.email, inputs.password);
      // TODO handle failure
      console.log(res);
    }
  };

  return (
      <AuthCard>
        <Heading> Create account </Heading>
        <AuthForm handleSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            value={inputs.email}
            error={errors.email}
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            value={inputs.password}
            error={errors.password}
            onChange={handleChange}
          />
          <button className="btn btn-primary btn-upload" onClick={handleSubmit}> Sign up </button>
        </AuthForm>
        {/* <Link> Have an account? </Link> */}
      </AuthCard>
  );
}

export default Signup;
