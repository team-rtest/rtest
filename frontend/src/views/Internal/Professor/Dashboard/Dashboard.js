import React from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";

import CreateCard from "./CreateCard";
import CourseCard from "./CourseCard";

function Dashboard() {
  const query = gql`
    query {
      courses {
        name
        courseNumber
        semester
      }
    }
  `;

  const { data, loading, error } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // const courses = [
  //   {
  //     _id: "1",
  //     courseNumber: "CS470",
  //     semester: "Fall 2019",
  //     name: "Data Mining",
  //     color: "#ff695e",
  //     pinned: true,
  //   },
  //   {
  //     _id: "2",
  //     courseNumber: "CS325",
  //     semester: "Fall 2019",
  //     name: "Artificial Intelligence",
  //     color: "#ff851b",
  //   },
  //   {
  //     _id: "3",
  //     courseNumber: "CS334",
  //     semester: "Fall 2019",
  //     name: "Machine Learning",
  //     color: "#2ecc40",
  //   },
  //   {
  //     _id: "4",
  //     courseNumber: "CS377",
  //     semester: "Fall 2019",
  //     name: "Database Systems",
  //     color: "#54c8ff",
  //   },
  // ];

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
