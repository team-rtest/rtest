import React, { useState } from 'react';
import styled from 'styled-components';

import Header from 'views/Header';
import Error404 from 'views/Error404';

import { routes } from 'routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [data, setData] = useState({
    student: {},
    courses: {}
  });

  return (
    <Router>
      <Header />
      <Screen>
        <Switch>
          { routes.map(route => <Route exact path={route.path}>{ route.page }</Route>) }
          <Route path="*" component={Error404} />
        </Switch>
      </Screen>
    </Router>
  );
}


const Screen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: calc(100vh - 80px);
`;

export default App;
