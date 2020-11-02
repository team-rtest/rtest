import React, { useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import CreateCourse from "views/Internal/Professor/Form/CreateCourse";

function CreateCard() {
  const [createCourseModal, setCreateCourseModal] = useState(false);

  return (
    <div>
      {createCourseModal && <CreateCourse closeModal={() => setCreateCourseModal(false)} />}
      <Box onClick={() => setCreateCourseModal(true)}>
        <span className="fa fa-plus-circle" />
        Add Course
      </Box>
    </div>
  );
}

const Box = styled(Link)`
  color: rgba(0, 0, 0, 0.6);
  background-color: #f1f2f3;
  font-weight: 600;
  margin-bottom: 0;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  font-size: 1.5rem;
  border-radius: 4px;

  &:hover,
  &focus {
    text-decoration: none;
    color: #6173db;
    background: rgba(97, 115, 219, 0.2);
  }
`;

export default CreateCard;
