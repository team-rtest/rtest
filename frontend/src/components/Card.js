import React from "react";
import styled from "styled-components";

function Card({ children, ...rest }) {
  return <StyledCard {...rest}>{children}</StyledCard>;
}

const StyledCard = styled.div`
  background: #f8f9fa;
  border: 1px solid lightgrey;
  border-radius: 0.25rem;
`;

export default Card;
