import React from 'react';
import styled from 'styled-components';

function Card({ children, className, ...rest }) {
  return (
    <StyledCard className={`card ${className}`} {...rest}>
      { children }
    </StyledCard>
  );
}

const StyledCard = styled.div`
  background: #f8f9fa;
`;


export default Card;
