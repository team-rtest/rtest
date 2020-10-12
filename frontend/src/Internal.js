import React from "react";
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
          <Switch>
            {routes.map((route) => (
              <Route exact path={route.path}>
                {route.page}
              </Route>
            ))}
            <Route path="*" component={Error404} />
          </Switch>
        </Right>
      </Desktop>

      <Mobile>
        <Topbar />
        <Switch>
          {routes.map((route) => (
            <Route exact path={route.path}>
              {route.page}
            </Route>
          ))}
          <Route path="*" component={Error404} />
        </Switch>
        <Bottombar />
      </Mobile>
    </Box>
  );
}

const Box = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Right = styled.div`
  padding-top: 69px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Desktop = styled.div`
  padding-left: 250px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Mobile = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
    padding-top: 69px;
    padding-bottom: 56px;
  }
`;

export default Internal;
