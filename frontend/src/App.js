import React, { useState } from 'react';
import styled from 'styled-components';

import External from './External';
import Internal from './Internal';
import Error404 from 'views/Error404';

import { routes } from 'routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [data, setData] = useState({
    student: {},
    courses: {}
  });

  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <Router>
      <Screen>
        {
          isLoggedIn
          ? <Internal />
          : <External />
        }
      </Screen>
    </Router>
  );
}

const Screen = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default App;
