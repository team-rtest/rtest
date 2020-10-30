import React from "react";
import styled from "styled-components";
import { fetchCourses } from "api/fetch";
import { useQuery } from "@apollo/client";

import CreateCard from "./CreateCard";
import CourseCard from "./CourseCard";

import { Loader } from "components";

function Dashboard() {
  const { data, loading, error } = useQuery(fetchCourses);
  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  return (
    <Box>
      <Heading>Your Courses</Heading>
      <Grid>
        {data.courses && data.courses.map((course) => <CourseCard key={course._id} {...course} />)}
        <CreateCard />
      </Grid>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  padding: 30px;
`;

const Heading = styled.h1`
  font-weight: 600;
  margin-bottom: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export default Dashboard;
