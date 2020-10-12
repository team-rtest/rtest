import React from "react";
import styled from "styled-components";

import Header from "views/Header";
import Error404 from "views/Error404";

import { routes } from "routes";
import { Switch, Route } from "react-router-dom";

function External() {
  return (
    <>
      <Header />
      <Screen>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} exact path={route.path}>
              {route.page}
            </Route>
          ))}
          <Route path="*" component={Error404} />
        </Switch>
      </Screen>
    </>
  );
}

const Screen = styled.div``;

export default External;
