import React from "react";
import styled from "styled-components";

function Checkbox({ name, label, value, error, onChange }) {
  return (
    <Box>
      <input
        id={name}
        checked={value}
        type="checkbox"
        onChange={(e) => onChange(name, e.target.checked)}
      />
      <Label for={name}>{label}</Label>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  grid-gap: 10px;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 0;
`;

export default Checkbox;
