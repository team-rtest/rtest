import React from "react";
import styled from "styled-components";
import {
  getGradeList,
  getMedian,
  getMax,
  getMin,
} from "./AssignmentReviewHelper";
import GraphSpace from "./GraphSpace";
import {getAssignments} from "../../../../api/getAssignment";
import { useQuery } from '@apollo/client';


function AssignmentReview() {
  const {loading, error, data} = useQuery(getAssignments);

  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;

  return (
    <div class="container">
      <h1>Assignment Review</h1>
      <ReviewTable>
        <ReviewThead>
          <Rtr>
            <Rth>Assignment Name</Rth>
            <Rth>Median Grade</Rth>
            <Rth>Max Grade</Rth>
            <Rth>Min Grade</Rth>
          </Rtr>
        </ReviewThead>
        <ReviewTbody>
          {data.assignments.map((d) => {
            return (
              <Rtr>
                <Rtd data-label="Name">{d.name}</Rtd>
                <Rtd data-label="Median Grade">
                  {getMedian(getGradeList(d.submissions))}
                </Rtd>
                <Rtd data-label="Max Grade">
                  {getMax(getGradeList(d.submissions))}
                </Rtd>
                <Rtd data-label="Min Grade">
                  {getMin(getGradeList(d.submissions))}
                </Rtd>
              </Rtr>
            );
          })}
        </ReviewTbody>
      </ReviewTable>
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

const ReviewTable = styled.table`
  margin-top: 35px;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
`;

const ReviewThead = styled.thead`
  background: #6173db;
  color: white;
`;

const ReviewTbody = styled.tbody`
  background: #f0f1ff;
`;

const Rtr = styled.tr`
  height: 40px;
`;

const Rtd = styled.td`
  border-top: 3px solid white;
  padding: 10px;
`;

const Rth = styled.th`
  padding: 10px;
`;
const GraphStyle = styled.div`
  padding: 20px;
  border: 2px dashed #ced5d9;
  margin: 30px;
`;
export default AssignmentReview;
