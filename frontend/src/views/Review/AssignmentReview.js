import React, { useState } from "react";
import styled from "styled-components";
import assignment from "data/assignment.json";
import { getGradeList, getMedian, getMax, getMin } from "./AssignmentReviewHelper";

function AssignmentReview() {
  return (
    <table class="ui celled table">
      <thead>
        <tr>
          <th>Assignment Name</th>
          <th>Median Grade</th>
          <th>Max Grade</th>
          <th>Min Grade</th>
        </tr>
      </thead>
      <tbody>
        {assignment.map((d) => {
          return (
            <tr>
              <td data-label="Name">{d.name}</td>
              <td data-label="Median Grade">{getMedian(getGradeList(d.submissions))}</td>
              <td data-label="Max Grade">{getMax(getGradeList(d.submissions))}</td>
              <td data-label="Min Grade">{getMin(getGradeList(d.submissions))}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default AssignmentReview;
