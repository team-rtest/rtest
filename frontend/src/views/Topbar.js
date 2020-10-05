import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

function Topbar({ ...rest }) {
  return (
    <Box>
      <Breadcrumb> <NavLink>Courses</NavLink> / <NavLink>Data Mining</NavLink> / <Current>Apriori Algorithm</Current> </Breadcrumb>
      <NavLink className="btn btn-primary btn-upload text-white" to="/login"> Sign out </NavLink>
    </Box>
  );
}

const Box = styled.div`
  border-bottom: 1px solid #eee;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Breadcrumb = styled.div`
  font-size: 1.1rem;
  color: grey;
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

const Current = styled.span`
  color: black;
`;

export default Topbar;
