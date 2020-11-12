import React from "react";
import styled from "styled-components";

function FileInput({ name, type, label, value, tip, error, onChange, className, ...rest }) {
  return (
    <div>
      <Label>{label}</Label>
      <StyledInput
        type="file"
        id={name}
        value={value}
        onChange={(event) => onChange(name, event.target)}
        className={`form-control ${className} ${error && "is-invalid"}`}
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
  margin-bottom: 4px;
  font-size: 0.9rem;
  color: grey;
`;

export default FileInput;
