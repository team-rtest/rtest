import { gql } from "@apollo/client";

export default gql`
  query {
    courses {
      name
      courseNumber
      semester
    }
  }
`;
