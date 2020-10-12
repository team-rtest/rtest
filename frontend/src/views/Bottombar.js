import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

function Bottombar({ ...rest }) {
  return (
    <Navigation {...rest}>
      <NavLinks>
        <NavLink selected>
          <Icon className="fa fa-chart-pie" />
        </NavLink>
        <NavLink>
          <Icon className="fa fa-bell" />
        </NavLink>
        <NavLink>
          <Icon className="fa fa-user" />
        </NavLink>
        <NavLink>
          <Icon className="fa fa-cog" />
        </NavLink>
      </NavLinks>
    </Navigation>
  );
}

const Navigation = styled.nav`
  z-index: 10;
  width: 100vw;
  background: #6173db;
  height: 56px;
  position: fixed;
  left: 0;
  bottom: 0;
`;

const NavLinks = styled.div`
  display: flex;
  height: 100%;
`;

const NavLink = styled(Link)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255, 0.5);
  color: ${(props) => props.selected && "white"};
  background: ${(props) => props.selected && "#5163cb"};
  font-weight: ${(props) => props.selected && "500"};
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: rgb(255, 255, 255, 0.5);
    color: ${(props) => props.selected && "white"};
  }
`;

const Icon = styled.i`
  width: 20px;
  text-align: center;
`;

export default Bottombar;
