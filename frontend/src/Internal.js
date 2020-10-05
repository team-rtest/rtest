import React, { useState } from 'react';
import styled from 'styled-components';

import Sidebar from 'views/Sidebar';
import Topbar from 'views/Topbar';
import Error404 from 'views/Error404';

import { routes } from 'routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Internal() {
  return (
    <Box>
      <Sidebar />
      <Right>
        <Topbar />
        <Content>
          <Switch>
            { routes.map(route => <Route exact path={route.path}>{ route.page }</Route>) }
            <Route path="*" component={Error404} />
          </Switch>
        </Content>
      </Right>
    </Box>
  );
}


const Box = styled.div`
  display: flex;
`;

const Right = styled.div`
  height: 100vh;
  width: 100%;
`;

const Content = styled.div`
  height: calc(100vh - 69px);
`;

export default Internal;
