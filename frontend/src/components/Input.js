import React, { useState } from 'react';
import styled from 'styled-components';

function Input({ name, type, value, error, onChange, className, ...rest }) {
  const [focus, setFocus] = useState(false);
  const label = name.split('_').join(' ');

  return (
    <div>
      <Label>{ label }</Label>
      <input
        type={type}
        id={name}
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={event => onChange(name, event.target.value)}
        className={`form-control ${className} ${!focus && error !== null && (error ? "is-invalid" : "is-valid") }`}
        {...rest}
      />
      <div className="invalid-feedback">
        { !focus && error }
      </div>
    </div>
  );
}

const StyledInput = styled.input`

`;

const Label = styled.label`
  text-transform: capitalize;
  margin-bottom: 2px;
  font-size: 0.9rem;
  color: grey;
`;

export default Input;
