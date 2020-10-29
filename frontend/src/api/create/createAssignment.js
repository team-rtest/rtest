import { gql } from "@apollo/client";

export default gql`
  mutation CreateAssignment($assignment: AssignmentInput) {
    createAssignment(assignment: $assignment) {
      _id
    }
  }
`;
