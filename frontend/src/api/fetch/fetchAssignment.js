import { gql } from "@apollo/client";

export default gql`
  query Assignment {
    assignment(id: $id) {
      name
      courseNumber
      semester
      students {
        firstName
        lastName
      }
    }
  }
`;
