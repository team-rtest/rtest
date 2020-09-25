import React, { useState } from "react";

import { Input } from "components";
import { AuthCard, AuthForm, Heading, AuthLink } from "./styles";
import { GoogleLogin } from "react-google-login";
import { validate, validatePassword } from "./AuthHelper";

import { auth } from "api";

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Login() {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: null, password: null });

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = async () => {
    setErrors({
      // email: validateEmail(inputs.email),
      password: validatePassword(inputs.password),
    });

    const noneEmpty = inputs.username && inputs.password;
    const noneError = !errors.password;

    if (noneEmpty && noneError) {
      alert("form submitted successfully!");
      auth.login(inputs.username, inputs.password);
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <AuthCard>
      <Heading> Login </Heading>
      <AuthForm handleSubmit={handleSubmit}>
        <Input
          name="username"
          type="username"
          value={inputs.username}
          error={errors.username}
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          value={inputs.password}
          error={errors.password}
          onChange={handleChange}
        />
        <button className="btn btn-primary btn-upload" onClick={handleSubmit}>
          {" "}
          Login{" "}
        </button>
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login With Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </AuthForm>
      <AuthLink to="forgot-password"> Forgot Password? </AuthLink>
    </AuthCard>
  );
}

export default Login;
