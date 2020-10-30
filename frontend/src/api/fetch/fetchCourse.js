import { gql } from "@apollo/client";

export default gql`
  query Course {
    course(id: $id) {
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
