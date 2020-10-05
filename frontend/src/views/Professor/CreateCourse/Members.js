import React from 'react';
import styled from 'styled-components';

import Upload from 'views/Upload';

function Members({ inputs, errors, handleChange }) {
  return (
    <Inputs>
      <Upload />
    </Inputs>
  )
}

const Inputs = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export default Members;
