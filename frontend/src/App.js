import React from "react";
import styled from "styled-components";

import { external, internal } from "routes";
import { useHistory, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import External from "views/External/External";
import Internal from "views/Internal/Internal";
import Error404 from "views/Error404";
import { useQuery } from '@apollo/client';
import {retrieveUserInfo} from "../src/api/profileRetrieval";

function App() {
  
  const history = useHistory();
  const {data} = useQuery(retrieveUserInfo);
  if(data ===null ){
    history.push("/login");
  }

  return (
    <Router>
      <Screen>
        <Switch>
          {external.map(({ path, page }) => (
            <Route key={path} exact path={path}>
              <External>{page}</External>
            </Route>
          ))}

          {internal.map(({ path, page }) => (
            <Route key={path} exact path={path}>
              <Internal>{page}</Internal>
            </Route>
          ))}

          <Route exact path="*">
            <Error404 />
          </Route>
        </Switch>
        <Test>Hello World</Test>
      </Screen>
    </Router>
  );
}

const Screen = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Test = styled.div`
  display: none;
`;

export default App;
