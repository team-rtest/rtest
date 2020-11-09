import React, { useEffect } from "react";
import styled from "styled-components";

import { external, internal } from "routes";
import { useLocation, useHistory, Switch, Route } from "react-router-dom";
import External from "views/External/External";
import Internal from "views/Internal/Internal";
import Error404 from "views/Error404";
import { useQuery } from "@apollo/client";
import { retrieveUserInfo } from "../src/api/profileRetrieval";
import { Loader } from "components";

function App() {
  const location = useLocation();
  const history = useHistory();
  const { data, loading, error } = useQuery(retrieveUserInfo);

  useEffect(() => {
    const path = location.pathname;
    const isInternal = path.includes("professor") || path.includes("student");
    const isExternal = !isInternal;

    if (!loading) {
      data
        ? isExternal && history.push("/professor/courses")
        : isInternal && history.push("/login");
    }
  });

  if (loading) return <PageLoader />;
  if (error) return <p>Error :(</p>;

  return (
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
  );
}

const Screen = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Test = styled.div`
  display: none;
`;

const PageLoader = styled(Loader)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
