import React from 'react';
import styled from 'styled-components';
import './App.css';

import Login from 'views/Login'
import Signup from 'views/Signup'
import Upload from 'views/Upload'
import ResetPassword from 'views/ResetPassword'
import ForgotPassword from 'views/ForgotPassword'

function App() {
  return (
    <Screen>
      <Signup />
    </Screen>
  )
}

const Screen = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export default App;
