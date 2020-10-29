import React, { useState } from "react";
import styled from "styled-components";

function Input({ name, type, value, tip, error, options, onChange, className, ...rest }) {
  const [focus, setFocus] = useState(false);
  const label = name.split("_").join(" ");

  return (
    <div>
      <Above>
        <Label>{label}</Label>
        {tip && (
          <Tip>
            <Icon className="fa fa-question-circle" />
            <Message>{tip}</Message>
          </Tip>
        )}
      </Above>
      <StyledInput
        type={type}
        id={name}
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(event) => onChange(name, event.target.value)}
        className={`form-control ${className} ${!focus && error !== null && error && "is-invalid"}`}
        {...rest}
      >
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </StyledInput>
      <div className="invalid-feedback">{!focus && error}</div>
    </div>
  );
}

const StyledInput = styled.select`
  ::placeholder {
    color: darkgrey;
  }
`;

const Above = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
`;

const Tip = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Message = styled.div`
  position: absolute;
  top: -5px;
  left: 15px;
  display: none;
  white-space: nowrap;
  font-size: 0.8rem;
  color: white;
  background: grey;
  padding: 2px 4px;
  border-radius: 4px;
`;

const Icon = styled.div`
  &:hover + ${Message} {
    display: block;
  }

  color: grey;
  font-size: 0.75rem;
`;

const Label = styled.label`
  text-transform: capitalize;
  margin-bottom: 2px;
  font-size: 0.9rem;
  color: grey;
`;

export default Input;
