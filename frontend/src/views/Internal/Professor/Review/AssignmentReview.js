import React from "react";
import styled from "styled-components";
import {
  getGradeList,
  getMedian,
  getMax,
  getMin,
} from "./AssignmentReviewHelper";
import ReviewTable from "./ReviewTable.js";
import GraphSpace from "./GraphSpace";
import { getAssignments } from "../../../../api/getAssignment";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

function AssignmentReview() {
  const { loading, error, data } = useQuery(getAssignments);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return (
    <div class="container">
      <h1>Assignment Review</h1>
      <ReviewTable
        labels={[
          "Assignment Name",
          "Your Grade",
          "Median Grade",
          "Max Grade",
          "Min Grade",
        ]}
        data={[
          data.assignments.map((d) => (
            <Link
              to={{
                pathname:
                  "/professor/assignment/review/" +
                  d._id +
                  "/",
              }}
            >
              {d.name}
            </Link>
          )),
          data.assignments.map((d) => d.mySubmission.grade),
          data.assignments.map((d) => getMedian(getGradeList(d.submissions))),
          data.assignments.map((d) => getMax(getGradeList(d.submissions))),
          data.assignments.map((d) => getMin(getGradeList(d.submissions))),
        ]}
      />
      <h1>Distribution</h1>
      <GraphStyle>
        <GraphSpace
          data={data.assignments.map((a) => getGradeList(a.submissions))}
          labels={data.assignments.map((a) => a.name)}
        />
      </GraphStyle>
    </div>
  );
}
const GraphStyle = styled.div`
  padding: 20px;
  border: 2px dashed #ced5d9;
  margin: 30px;
`;
export default AssignmentReview;
