import React, { useState } from 'react';
import styled from 'styled-components';

import Header from 'views/Header';
import Error404 from 'views/Error404';

import { routes } from 'routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function External() {
  return (
    <>
      <Header />
      <Screen>
        <Switch>
          { routes.map(route => <Route exact path={route.path}>{ route.page }</Route>) }
          <Route path="*" component={Error404} />
        </Switch>
      </Screen>
    </>
  );
}


const Screen = styled.div`
  min-height: calc(100vh - 80px);
`;

export default External;
