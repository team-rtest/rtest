import React, { useState } from 'react';
import styled from 'styled-components';

function Input({ name, type, value, tip, error, onChange, className, ...rest }) {
  const label = name.split('_').join(' ');

  return (
    <div>
      <Label>{ label }</Label>
      <StyledInput
        type="file"
        id={name}
        value={value}
        onChange={event => onChange(name, event.target.value)}
        className={`form-control ${className} ${error !== null && (error ? "is-invalid" : "is-valid") }`}
        {...rest}
      />
      <div className="invalid-feedback">
        { error }
      </div>
    </div>
  );
}

const StyledInput = styled.input`
  // all: unset;
  display: block;
  padding: 3px;
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
  margin-bottom: 4px;
  font-size: 0.9rem;
  color: grey;
`;

export default Input;
