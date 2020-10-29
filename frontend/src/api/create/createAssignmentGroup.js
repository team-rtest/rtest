import { gql } from "@apollo/client";

export default gql`
  mutation CreateAssignmentGroup($assignmentGroup: AssignmentGroupInput) {
    createAssignmentGroup(assignmentGroup: $assignmentGroup) {
      _id
    }
  }
`;
