import React from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import AssignmentList from "./AssignmentList";
import AssignmentPage from "./AssignmentPage";
import { useParams } from "react-router-dom";
import { Loader } from "components";

const getCourse = gql`
  query FetchCourse($id: ID!) {
    course(id: $id) {
      assignmentGroups {
        name
        tag
        _id
        assignments {
          name
          _id
          dateDue
          mySubmission {
            student {
              _id
              username
            }
            submittedAt
            grade
          }
        }
      }
    }
  }
`;
function Assignment({ ...rest }) {
  const { courseId } = useParams();
  const { data, loading, error } = useQuery(getCourse, {
    variables: { id: "5f9dd8838a6e0e08b427f0e1" },
  });

  console.log(data);
  if (loading) {
    return <PageLoader />;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Box>
      <AssignmentList data={data} />
      <AssignmentPage />
    </Box>
  );
}

const PageLoader = styled(Loader)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  align-items: stretch;
  height: calc(100vh - 69px);
`;

export default Assignment;
