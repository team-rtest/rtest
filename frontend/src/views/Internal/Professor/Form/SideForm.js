import React, { useEffect } from "react";
import styled from "styled-components";

import { Form } from "components";

function SideForm({ title, children, button, onSubmit, closeModal }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  return (
    <Overlay>
      <SidebarForm handleSubmit={onSubmit}>
        <Heading>{title}</Heading>
        <Body>{children}</Body>
        <Foot>
          <Button className="btn btn-secondary" onClick={closeModal}>
            Close
          </Button>
          <Button className="btn btn-upload" onClick={onSubmit}>
            {button}
          </Button>
        </Foot>
      </SidebarForm>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (max-width: 600px) {
    background: #f8f9fa;
  }
`;

const SidebarForm = styled(Form)`
  background: #f8f9fa;
  width: 500px;
  height: 100vh;
  padding: 10px 0;

  padding @media only screen and (max-width: 600px) {
    background: none;
  }
`;

const Heading = styled.h3`
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  margin-bottom: 0;
`;

const Body = styled.div`
  padding: 15px 30px;
  display: grid;
  grid-gap: 20px;
`;

const InputRow = styled.div`
  display: flex;
  grid-gap: 20px;

  & > * {
    flex: 1;
  }
`;

const Foot = styled.div`
  padding: 15px 30px;
  display: flex;
  justify-content: flex-end;
  grid-gap: 10px;
`;

const Button = styled.button`
  width: inherit;
`;

export default SideForm;
