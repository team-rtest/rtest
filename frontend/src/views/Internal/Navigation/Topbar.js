import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

function Topbar() {
  return (
    <Box>
      <PageName> Your Courses </PageName>
      <Logo to="/"> RTest </Logo>
      <NavLink className="btn btn-primary btn-upload text-white" to="/login">
        Sign out
      </NavLink>
    </Box>
  );
}

const Box = styled.div`
  background: white;
  z-index: 10;
  border-bottom: 1px solid #eee;
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - 250px);
  position: fixed;
  top: 0;
  left: 250px;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    left: 0;
  }
`;

const PageName = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: black;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  width: auto;
  color: #6173db;
  cursor: pointer;

  &:hover {
    width: auto;
    color: #6173db;
    cursor: pointer;
  }
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
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
  }

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

export default Topbar;
