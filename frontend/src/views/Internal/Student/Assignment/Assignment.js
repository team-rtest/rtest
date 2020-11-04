import React, { useState } from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import AssignmentList from "./AssignmentList";
import AssignmentPage from "./AssignmentPage";

import { Loader } from "components";

const getAssignments = gql `
query {
  course(id: "5f9dd8838a6e0e08b427f0e1"){
    assignmentGroups{
      name
      tag
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
        submissions {
          grade
        }
      }
    }
  }
}
`;
function Assignment({ ...rest }) {
  const [selected, setSelected] = useState({
    id: 0,
    status: "graded",
    late: false,
    name: "HW0: K Nearest Neighbors",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  });
  const { data, loading, error } = useQuery(getAssignments);

  if (loading) return <PageLoader />;
  if (error) return <p>Error: {error.message}</p>;

  const assignments = [
    {
      name: "homework",
      list: [
        {
          id: 0,
          status: "graded",
          late: false,
          name: "HW0: K Nearest Neighbors",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
        {
          id: 1,
          status: "submitted",
          late: true,
          name: "HW1: Decision Tree",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
        {
          id: 2,
          status: "late",
          late: false,
          name: "HW2: Apriori Algorithm",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
        {
          id: 3,
          status: "next",
          late: true,
          name: "HW3: Naive Bayes",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
        {
          id: 4,
          status: "locked",
          late: true,
          name: "HW4: Perceptron",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
        {
          id: 5,
          status: "locked",
          late: true,
          name: "HW5: Random Forests",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
        {
          id: 6,
          status: "locked",
          late: false,
          name: "HW6: Neural Networks",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
        {
          id: 7,
          status: "locked",
          late: false,
          name: "HW7: Convolutional Neural Networks",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
      ],
    },

    {
      name: "quizzes",
      list: [
        {
          id: 0,
          name: "Quiz 0: K Nearest Neighbors",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
        {
          id: 1,
          name: "Quiz 1: Decision Tree",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
        {
          id: 2,
          name: "Quiz 2: Apriori Algorithm",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
        {
          id: 3,
          name: "Quiz 3: Naive Bayes",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        },
      ],
    },
  ];

  return (
    <Box>
      <AssignmentList
        assignments={assignments}
        selected={selected}
        setSelected={setSelected}
      />
      <AssignmentPage assignments={assignments} selected={selected} />
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
