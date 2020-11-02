import React, { useState } from "react";
import styled from "styled-components";

function Input({ name, type, label, value, tip, error, options, onChange, className, ...rest }) {
  const [focus, setFocus] = useState(false);

  options = [""].concat(options);

  return (
    <div>
      <Label>{label}</Label>
      <Box>
        <StyledInput
          type={type}
          id={name}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(event) => onChange(name, event.target.value)}
          className={`form-control ${className} ${!focus && error && "is-invalid"}`}
          {...rest}
        >
          {options.map((option) => (
            <option value={option} selected={value === option}>
              {option}
            </option>
          ))}
        </StyledInput>
        <Icon className="fa fa-caret-down" />
      </Box>
      <div className="invalid-feedback">{!focus && error}</div>
    </div>
  );
}

const StyledInput = styled.select`
  ::placeholder {
    color: darkgrey;
  }

  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
`;

const Box = styled.div`
  position: relative;
`;

const Label = styled.label`
  margin-bottom: 2px;
  font-size: 0.9rem;
  color: grey;
`;

const Icon = styled.i`
  position: absolute;
  right: 15px;
  top: 12px;
  font-size: 15px;
  color: grey;
`;

export default Input;
