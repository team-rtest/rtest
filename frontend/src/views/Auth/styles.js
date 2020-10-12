import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Card, Form } from 'components';

const AuthBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthCard = styled(Card)`
  display: grid;
  grid-gap: 15px;
  width: 20rem;
  padding: 20px;
`;

const AuthForm = styled(Form)`
  display: grid;
  grid-gap: 15px;
`;

const Heading = styled.h2`
  margin: 0;
  color: #6173db;
`;

const AuthLink = styled(Link)`
  cursor: pointer;
  margin: auto;
  color: grey;
  font-size: 0.9rem;
  border-bottom: 1px dashed grey;

  &:hover {
    color: #6173db;
    border-color: #6173db;
    text-decoration: none;
  }
`;

export { AuthBox, AuthCard, AuthForm, Heading, AuthLink }
