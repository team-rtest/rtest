import React from 'react';
import styled from 'styled-components';

import { Link } from "react-router-dom";

function Error404({ ...rest }) {
  return (
    <ErrorPage>
      <Heading> <Blue> Error 404: </Blue> Page not found </Heading>
      <Link> Return Home </Link>
    </ErrorPage>
  );
}

const ErrorPage = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  margin-bottom: 30px;
`;

const Blue = styled.span`
  font-weight: bold;
  color: #6173db;
`;


export default Error404;
