import React, { useState } from "react";
import styled from "styled-components";

import External from "./External";
import Internal from "./Internal";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <Router>
      <Screen>
        {isLoggedIn ? <Internal /> : <External />}
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
