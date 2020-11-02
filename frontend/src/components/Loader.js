import React from "react";
import styled from "styled-components";

function Loader({ className }) {
  return (
    <div className={className}>
      <Spinner />
    </div>
  );
}

const Spinner = styled.div`
  border: 4px solid #f1f2f3; /* Light grey */
  border-top: 4px solid #6173db; /* Blue */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
