import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import Course from "./Course";
import { Loader } from "components";

const query = gql`
  query {
    courses {
      _id
      name
      code
      semester
      mySection {
        number
        instructor {
          firstname
          lastname
        }
      }
      assignmentGroups{
        name
        tag
        _id
        grading {
          policy
          weight
        }
        assignments {
          name
          _id
          dateDue
          maxGrade
          mySubmission {
            submittedAt
            grade
          }
        }
      }
    }
  }
`;

function Courses({ selected, setSelected, assignments }) {
  const { data, loading, error } = useQuery(query);
  if (loading) {return <PageLoader />;}
  if (error) {return <p>Error: {error.message}</p>;}

  return (
    <Dashboard>
      <Heading>Your Courses</Heading>
      <Grid>
        {data.map((course, index) => (
          <Course key={index} {...course} />
        ))}
      </Grid>
    </Dashboard>
  );
}

const PageLoader = styled(Loader)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dashboard = styled.div`
  min-height: calc(100vh - 69px);
  width: 100%;
  padding: 30px;
`;

const Heading = styled.h1`
  font-weight: 600;
  margin-bottom: 25px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export default Courses;
