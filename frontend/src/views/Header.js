import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

function Header({ ...rest }) {
  return (
    <Navigation {...rest}>
      <Logo to="/"> RTest </Logo>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/signup"> Signup </NavLink>
      <NavLink className="btn btn-primary btn-upload text-white" to="/login"> Login </NavLink>
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 80px;
  padding: 30px;
  grid-gap: 50px;
  border-bottom: 1px solid #eee;

  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
`;

const Logo = styled(Link)`
  all: unset;
  color: #6173db;
  font-weight: 800;
  margin-right: auto;
  margin-bottom: 0;
  line-height: 1.2;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    all: unset;
    color: #6173db;
    font-weight: 800;
    margin-right: auto;
    margin-bottom: 0;
    line-height: 1.2;
    font-size: 2rem;
    cursor: pointer;
  }
`;

const Button = styled.button`
  width: auto;
`;

const NavLink = styled(Link)`
  width: auto;
  color: black;
  cursor: pointer;

  &:hover {
    color: #6173db;
  }
`;

export default Header;
