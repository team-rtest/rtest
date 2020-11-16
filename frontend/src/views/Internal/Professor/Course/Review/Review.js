import React from "react";
import styled from "styled-components";
import { getGradeList, getMedian, getMax, getMin, getMean } from "./AssignmentReviewHelper";
import ReviewTable from "./ReviewTable.js";
import GraphSpace from "./GraphSpace";
import { getAssignments } from "../../../../../api/getAssignment";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import  Chart  from "chart.js";
let chart1

class BarGraphSpace extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;
    const { data, labels } = this.props;
    if (typeof chart1 !== "undefined") chart1.destroy();
    chart1 = new Chart(node, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Average",
            data: data,
            backgroundColor: "rgba(97, 115, 219, 0.5)",
            borderColor: "rgba(52, 63, 125, 0.75)",
            borderWidth: 2,
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
function Review() {
  const { loading, error, data } = useQuery(getAssignments);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return (
    <div class="container">
      <h1>Assignment Review</h1>
      <ReviewTable
        labels={["Assignment Name", "Your Grade", "Median Grade", "Max Grade", "Min Grade"]}
        data={[
          data.assignments.map((d) => (
            <Link
              to={{
                pathname: "/professor/assignment/review/" + d._id + "/",
              }}
            >
              {d.name}
            </Link>
          )),
          data.assignments.map((d) => {
            if (d.mySubmission == null) {
              return null;
            } else {
              return d.mySubmission.grade;
            }
          }),
          data.assignments.map((d) => {
            if (!d.submissions.length || !d.submissions) {
              return null;
            } else {
              return [getMedian(getGradeList(d.submissions))];
            }
          }),
          data.assignments.map((d) => {
            if (!d.submissions.length || !d.submissions) {
              return null;
            } else {
              return [getMax(getGradeList(d.submissions))];
            }
          }),
          data.assignments.map((d) => {
            if (!d.submissions.length || !d.submissions) {
              return null;
            } else {
              return [getMin(getGradeList(d.submissions))];
            }
          }),
        ]}
      />
      <h1>Distribution</h1>
      <GraphStyle>
      <BarGraphSpace
      data = {data.assignments.map((a) => getMean(getGradeList(a.submissions)))}
      labels={data.assignments.map((a) => a.name)}
      />
      </GraphStyle>
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
export default Review;
