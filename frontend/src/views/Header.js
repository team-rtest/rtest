import React from 'react';
import styled from 'styled-components';

import { Link } from "react-router-dom";

function Header({ ...rest }) {
  return (
    <Navigation {...rest}>
      <Logo> RTest </Logo>
      <NavLink to="/upload"> Home </NavLink>
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
`;

const Logo = styled.h2`
  color: #6173db;
  font-weight: 800;
  margin-right: auto;
  margin-bottom: 0;
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
