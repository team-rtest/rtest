import React, { useState } from "react";

import { Input } from "components";
import { AuthBox, AuthCard, AuthForm, Heading, AuthLink } from "./styles";
import { validateEmail } from "./functions";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (name, value) => {
    setEmail(value);
    setError(validateEmail(value));
  };

  const handleSubmit = () => {
    setError(validateEmail(email));

    if (email && !error) {
      alert("form submitted successfully!");
    }
  };

  return (
    <AuthBox>
      <AuthCard>
        <Heading> Forgot Password </Heading>
        <AuthForm handleSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            value={email}
            error={error}
            onChange={handleChange}
          />
          <button className="btn btn-primary btn-upload" onClick={handleSubmit}>
            Send Password Reset Email
          </button>
        </AuthForm>
        <AuthLink to="login"> Return to login </AuthLink>
      </AuthCard>
    </AuthBox>
  );
}

export default ForgotPassword;
