import React, { useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

function AssignmentType({ type, selected, setSelected }) {
  const [hidden, setHidden] = useState(false);

  return (
    <TypeList>
      <Type>
        <Head>
          <Arrow
            className={`fa fa-caret-${hidden ? "right" : "down"}`}
            onClick={() => setHidden(!hidden)}
          />
          <TypeName>{type.name}</TypeName>
          <Count>{type.list.length}</Count>
        </Head>
        {!hidden && (
          <List>
            {type.list.map(({ id, name, status, description }) => (
              <AssignmentItem
                disabled={status === "locked"}
                key={id}
                selected={name === selected.name}
                onClick={() => setSelected(type.list[id])}
              >
                <Heading>
                  <Name>{name}</Name>
                  <Tag status={status}>{status}</Tag>
                </Heading>
                <Date> September 18th 2020 </Date>
                <Description>{description}</Description>
              </AssignmentItem>
            ))}
          </List>
        )}
      </Type>
    </TypeList>
  );
}

const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  grid-gap: 10px;
  border: 1px solid #eee;
  border-top: none;
  background: #f8f9fa;
`;

const Type = styled.div``;

const TypeName = styled.div`
  color: rgb(97, 115, 219);
  background: rgba(97, 115, 219, 0.2);
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 1rem;
  padding: 0 10px;
  text-transform: uppercase;
  font-weight: 700;
`;

const Arrow = styled.span`
  cursor: pointer;
  width: 12px;
  font-size: 1.2rem;
`;

const TypeList = styled.div`
  width: 350px;
  // height: 100%;
  overflow-y: auto;
`;

const Count = styled.div`
  color: rgb(108, 117, 125);
  background: rgb(108, 117, 125, 0.2);
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 1rem;
  padding: 0 10px;
  margin-left: auto;
`;

const List = styled.div`
  // background: #f8f9fa;
`;

const AssignmentItem = styled.div`
  cursor: pointer;
  padding: 25px;
  margin-top: -1px;
  border: 1px solid #eee;
  background: ${(props) => props.selected && "rgba(97, 115, 219, 0.1)"};
  opacity: ${(props) => props.disabled && "0.5"};
`;

const Heading = styled.h5`
  display: flex;
  grid-gap: 10px;
  font-size: 1.25rem;
  font-weight: 600;
  justify-content: space-between;
  margin-bottom: 0;
`;

const Name = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const Description = styled.p`
  color: grey;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 0;
`;

const Tag = styled.div`
  width: auto;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 6px 8px;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #6173db;
  background: rgba(97, 115, 219, 0.2);

  ${(props) => {
    switch (props.status) {
      case "submitted":
        return `
          color: #6173DB;
          background: rgba(97, 115, 219, 0.2);
        `;

      case "late":
        return `
          color: hsl(350, 62.9%, 62%);
          background: hsla(350, 62.9%, 62%, 0.2);
        `;

      case "locked":
        return `
          color: rgb(108, 117, 125);
          background: rgb(108, 117, 125, 0.2);
        `;

      case "next":
        return `
          color: rgb(108, 117, 125);
          background: rgb(108, 117, 125, 0.2);
        `;

      case "graded":
        return `
          color: hsl(150, 52.9%, 52%);
          background: hsla(150, 52.9%, 52%, 0.2);
        `;
    }
  }}
`;

const Date = styled.div`
  color: grey;
  color: #6173db;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

export default AssignmentType;
