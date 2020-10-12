import React from "react";
import styled from "styled-components";

import Header from "views/External/Navigation/Header";

function External({ children }) {
  return (
    <Box>
      <Header />
      <Screen>{children}</Screen>
    </Box>
  );
}

const Box = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Screen = styled.div``;

export default External;
