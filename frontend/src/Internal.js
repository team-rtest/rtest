import React, { useState } from "react";
import styled from "styled-components";

import Sidebar from "views/Sidebar";
import Topbar from "views/Topbar";
import Error404 from "views/Error404";

import Bottombar from "views/Bottombar";

import { routes } from "routes";
import { Switch, Route } from "react-router-dom";

function Internal() {
  return (
    <Box>
      <Desktop>
        <Sidebar />
        <Right>
          <Topbar />
          <Content>
            <Switch>
              {routes.map((route) => (
                <Route exact path={route.path}>
                  {route.page}
                </Route>
              ))}
              <Route path="*" component={Error404} />
            </Switch>
          </Content>
        </Right>
      </Desktop>

      <Mobile>
        <Content>
          <Topbar />
          <Switch>
            {routes.map((route) => (
              <Route exact path={route.path}>
                {route.page}
              </Route>
            ))}
            <Route path="*" component={Error404} />
          </Switch>
        </Content>
        <Bottombar />
      </Mobile>
    </Box>
  );
}

const Box = styled.div`

`;

const Right = styled.div`
  height: 100vh;
  width: 100%;
`;

const Content = styled.div`
  height: calc(100vh - 69px);
  width: 100%;
  margin-top: 69px;

  @media only screen and (max-width: 600px) {
    min-height: calc(100vh - 125px);
    margin-bottom: 56px;
  }
`;

const Desktop = styled.div`
  display: flex;
  width: 100%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Mobile = styled.div`
  display: none;
  width: 100%;
  @media only screen and (max-width: 600px) {
    display: flex;
  }
`;

export default Internal;
