import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import AssignmentDetails from "./AssignmentDetails"
import AssignmentReview from "./AssignmentReview"


function AssignmentPage() {
  const {courseId, id } = useParams();
  return id ? <AssignmentDetails /> : <AssignmentReview />;
}

export default AssignmentPage;

// <Box>
//   <Heading> Quizzes </Heading>
//   <Subheading> Grades </Subheading>
//   <Graph />
//   <Subheading> Assignments </Subheading>
//   <Table assignments={assignments} />
// </Box>
