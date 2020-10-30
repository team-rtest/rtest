import { gql } from "@apollo/client";

export default gql`
  query {
    courses {
      _id
      name
      code
      semester
    }
  }
`;
