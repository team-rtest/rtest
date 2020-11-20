import React, { useState } from "react";
import styled from "styled-components";

function Input({ name, type, label, value, tip, error, onChange, className, ...rest }) {
  const [focus, setFocus] = useState(false);

  const handleChange = (event) => {
    let value = event.target.value;

    if (type === "number") {
      value = parseInt(value);
    }

    onChange(name, value);
  };

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
        autoComplete="off"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={handleChange}
        className={`form-control ${className} ${!focus && error && "is-invalid"}`}
        {...rest}
      />
      <div className="invalid-feedback">{!focus && error}</div>
    </div>
  );
}

const StyledInput = styled.input`
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
  margin-bottom: 2px;
  font-size: 0.9rem;
  color: grey;
`;

export default Input;
