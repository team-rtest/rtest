import React from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Chart from "chart.js";
import { Loader } from "components";
const getAssignments = gql`
  query FetchCourse($id: ID!) {
    me{
      firstName
      lastName
    }
    course(id: $id) {
      assignmentGroups {
        tag
        assignments {
          name
          mySubmission {
            grade
          }
        }
      }
    }
  }
`;
class BarGraph extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;
    const { data, labels } = this.props;

    new Chart(node, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Score",
            data: data,
            backgroundColor: [
              "rgba(93, 173, 226, 0.5)",
              "rgba(72, 201, 176, 0.5)",
              "rgba(69, 179, 157, 0.5)",
            ],
            barPercentage: 0.75,
            maxBarThickness: 200,
          },
        ],
      },
    });
  }

  render() {
    return (
      <div>
        <canvas
          style={{ width: 800, height: 300 }}
          ref={(node) => (this.node = node)}
        />
      </div>
    );
  }
}
function StudentAssignmentReview() {
  const { courseId } = useParams();
  const { data, loading, error } = useQuery(getAssignments, {
    variables: { id: courseId },
  });
  if (loading) {
    return <PageLoader />;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <Box>
      <ReviewTitle>Assignment Stats {data.me.firstName && data.me.lastName &&("for " + data.me.firstName + " " + data.me.lastName)}</ReviewTitle>
      {data.course.assignmentGroups.map((assignmentGroup) => (
        <div className="container">
          <AssignmentGroupTitle>{assignmentGroup.tag}</AssignmentGroupTitle>
          <BarGraph
            data={
              assignmentGroup.assignments.map((a) => {
                if (a.mySubmission == null || a.mySubmission.grade == null) {
                  return 0;
                }
                return a.mySubmission.grade;
              })
            }
            labels={assignmentGroup.assignments.map((a) => a.name)}
          />
        </div>
      ))}
    </Box>
  );
}

const Box = styled.div`
  width: calc(100% - 350px);
`;

const ReviewTitle = styled.h1`
  text-align: center;
`;

const AssignmentGroupTitle = styled.h2`
  text-align: center;
`;

const PageLoader = styled(Loader)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StudentAssignmentReview;
