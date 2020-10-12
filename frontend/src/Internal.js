import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Sidebar from "views/Sidebar";
import Topbar from "views/Topbar";
import Error404 from "views/Error404";

import Bottombar from "views/Bottombar";

import { routes } from "routes";
import { Switch, Route } from "react-router-dom";

function getWindowWidth() {
  const { innerWidth: width } = window;
  return width;
}

function Internal() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth > 600 ? (
    <Box>
      <Desktop>
        <Sidebar />
        <Right>
          <Topbar />
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} exact path={route.path}>
                {route.page}
              </Route>
            ))}
            <Route path="*" component={Error404} />
          </Switch>
        </Right>
      </Desktop>
    </Box>
  ) : (
    <Box>
      <Mobile>
        <Topbar />
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} exact path={route.path}>
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
