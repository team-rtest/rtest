import React from "react";
import styled from "styled-components";
import { Card } from "components";
import { Link } from "react-router-dom";

function CourseCard({ _id, name, semester, color, pinned }) {
  return (
    <NavLink to={`/professor/course/${_id}/details`}>
      <Box color={color}>
        <Head>
          <Name>{name}</Name>
          <Star filled={pinned} className="fas fa-star" />
        </Head>
        <Semester>{semester}</Semester>
      </Box>
    </NavLink>
  );
}

const NavLink = styled(Link)`
  all: unset;
  &:hover {
    all: unset;
    cursor: pointer;
  }
`;

const Box = styled(Card)`
  display: block;
  background: ${(props) => props.color || "#f8f9fa"};
  padding: 20px;
  align-items: center;
  height: 10rem;
  border: none;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Star = styled.div`
  cursor: pointer;
  color: ${(props) => (props.filled ? "gold" : "rgba(0, 0, 0, 0.2)")};
  font-size: 1.25rem;
`;

const Name = styled.h4`
  color: black;
  opacity: 0.75;
  font-weight: 600;
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const Semester = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 1.1rem;
  font-weight: 500;
`;

export default CourseCard;
