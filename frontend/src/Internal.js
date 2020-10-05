import React, { useState } from 'react';
import styled from 'styled-components';

import Sidebar from 'views/Sidebar';
import Topbar from 'views/Topbar';
import Error404 from 'views/Error404';

import { routes } from 'routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Internal() {
  return (
    <>
      <Sidebar />
      <Screen>
        <Topbar />
        <Switch>
          { routes.map(route => <Route exact path={route.path}>{ route.page }</Route>) }
          <Route path="*" component={Error404} />
        </Switch>
      </Screen>
    </>
  );
}


const Screen = styled.div`
  min-width: calc(100vw - 250px);
  margin-left: 250px;
`;

export default Internal;
