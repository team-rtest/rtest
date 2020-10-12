import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

function Error404({ ...rest }) {
  return (
    <ErrorPage>
      <Indigo> 404 ERROR </Indigo>
      <Heading> Page not found </Heading>
      <NavLink> Return Home </NavLink>
    </ErrorPage>
  );
}

const ErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Heading = styled.h1`
  margin-bottom: 15px;
`;

const Indigo = styled.h4`
  font-weight: bold;
  font-size: 1.5rem;
  color: #6173db;
`;

const NavLink = styled(Link)`
  color: #6173db;

  &:hover,
  &:focus {
    color: #6173db;
    text-decoration: underline;
  }
`;

export default Error404;
