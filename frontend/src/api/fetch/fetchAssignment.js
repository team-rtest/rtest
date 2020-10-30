import { gql } from "@apollo/client";

export default gql`
  query Assignment {
    assignment(id: $id) {
      name
      code
      semester
      students {
        firstName
        lastName
      }
    }
  }
`;
