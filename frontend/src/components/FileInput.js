import React from "react";
import styled from "styled-components";

function Input({ name, type, value, tip, error, onChange, className, ...rest }) {
  const label = name.split("_").join(" ");

  return (
    <div>
      <Label>{label}</Label>
      <StyledInput
        type="file"
        id={name}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        className={`form-control ${className} ${
          error !== null && (error ? "is-invalid" : "is-valid")
        }`}
        {...rest}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
}

const StyledInput = styled.input`
  display: block;
  padding: 3px;
`;

const Label = styled.label`
  text-transform: capitalize;
  margin-bottom: 4px;
  font-size: 0.9rem;
  color: grey;
`;

export default Input;
