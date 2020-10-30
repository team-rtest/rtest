import { gql } from "@apollo/client";

export default gql`
  query Course {
    course(id: $id) {
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
