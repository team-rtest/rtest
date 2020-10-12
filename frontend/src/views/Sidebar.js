import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

function Header({ ...rest }) {
  return (
    <Navigation {...rest}>
      <Logo to="/"> RTest </Logo>
      <NavLinks>
        <NavLink selected><Icon className="fa fa-chart-pie" /> Dashboard </NavLink>
        <NavLink><Icon className="fa fa-bell" /> Notifications </NavLink>
        <NavLink><Icon className="fa fa-user" /> Account </NavLink>
        <NavLink><Icon className="fa fa-cog" /> Settings </NavLink>
      </NavLinks>
    </Navigation>
  );
}

const Navigation = styled.nav`
  height: 100vh;
  width: 250px;
  background: #6173db;
  position: fixed;
  left: 0;
  top: 0;
`;

const Logo = styled(Link)`
  display: block;
  color: white;
  font-weight: 800;
  padding: 20px;
  margin-right: auto;
  line-height: 1.2;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: white;
  }
`;

const NavLinks = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  width: auto;
  padding: 20px;
  color: rgb(255, 255, 255, 0.5);
  color: ${props => props.selected && 'white'};
  background: ${props => props.selected && '#5163cb'};
  font-weight: ${props => props.selected && '500'};
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: rgb(255, 255, 255, 0.5);
    color: ${props => props.selected && 'white'};
  }
`;

const Icon = styled.i`
  width: 20px;
  text-align: center;
`;

export default Header;
