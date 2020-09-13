import React, { useState } from 'react';
import styled from 'styled-components';

import Header from 'views/Header';
import Error404 from 'views/Error404';
import Assignment from 'views/Assignment/Assignment';

import Login from 'views/Auth/Login';
import Signup from 'views/Auth/Signup';
import ResetPassword from 'views/Auth/ResetPassword';
import ForgotPassword from 'views/Auth/ForgotPassword';

import Upload from 'views/Upload';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
            <Route path="/" exact component={Upload} />
            <Route path="/upload" component={Upload} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/assignments" component={Assignment} />
            <Route path="*" component={Error404} />
          </Switch>
        </Screen>
      </Router>
  )
}


const Screen = styled.div`
  min-width: 100vw;
  min-height: calc(100vh - 80px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
