import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Sidebar from "views/Internal/Navigation/Sidebar";
import Topbar from "views/Internal/Navigation/Topbar";
import Bottombar from "views/Internal/Navigation/Bottombar";

function Internal({ children }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
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
          {children}
        </Right>
      </Desktop>
    </Box>
  ) : (
    <Box>
      <Mobile>
        <Topbar />
        {children}
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
