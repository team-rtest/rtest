import React from 'react';
import styled from 'styled-components';

import { Link } from "react-router-dom";

function Error404({ ...rest }) {
  return (
    <ErrorPage>
      <Heading> Page not found <br /> <Indigo> 404 Error </Indigo> </Heading>
      <NavLink> Return Home </NavLink>
    </ErrorPage>
  );
}

const ErrorPage = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  margin-bottom: 30px;
`;

const Indigo = styled.span`
  font-weight: bold;
  font-size: 2rem;
  color: #6173db;
`;

const NavLink = styled(Link)`
  color: #6173db;

  &:hover, &:focus {
    color: #6173db;
    text-decoration: underline;
  }
`;



export default Error404;
