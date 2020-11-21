import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function formatDate(value) {
  const date = new Date(value);
  const year = parseInt(date.getYear()) + 1900;
  const month = parseInt(date.getMonth());
  const day = date.getDate();

  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${MONTHS[month]} ${day}, ${year}`;
}

function getStatus(dueDate, mySubmission){
  if(mySubmission == null){
    if(Date.now() > new Date(dueDate)){
      return "late";
    }
    else{
      return "next";
    }
  }
  else if((dueDate<mySubmission.submittedAt & mySubmission.grade ==null)){
    return "late";
  }
  else if(mySubmission.grade!=null && (dueDate<mySubmission.submittedAt)){
    return "graded&late";
  }
  else if(mySubmission.grade!=null){
    return "graded";
  }
}

function AssignmentType({ type,courseId }) {
  const [hidden, setHidden] = useState(true);

  return (
    <TypeList>
      <Type>
        <Head>
          <Arrow
            className={`fa fa-caret-${hidden ? "right" : "down"}`}
            onClick={() => setHidden(!hidden)}
          />
          <TypeName>{type.tag}</TypeName>
          <Count>{type.assignments.length}</Count>
        </Head>
        {!hidden && (
          <List>
            {type.assignments.map(({name, body, dateDue, mySubmission, locked, _id}) => (
              <Link
              key={_id}
              to = {"/student/"+courseId+ "/assignment/" + _id }
              style = {{textDecoration: "none"}}>
                <AssignmentItem
                  disabled={locked}
                >
                  <Heading>
                    <Name>{name}</Name>
                    <Tag status={getStatus(dateDue, mySubmission)}>{getStatus(dateDue, mySubmission)}</Tag>
                  </Heading>
                  <DateFormat> {formatDate(dateDue)} </DateFormat>
                  <Description>{body}</Description>
                </AssignmentItem>
              </Link>
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
  color: black;
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

      case "graded&late":
      return `
          color: rgb(245, 185, 118);
          background: rgb(245, 185, 118, 0.2);
      `;

      default:
        return ``;
    }
  }}
`;

const DateFormat = styled.div`
  color: grey;
  color: #6173db;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

export default AssignmentType;
