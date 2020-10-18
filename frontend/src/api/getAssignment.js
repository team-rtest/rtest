import { gql } from "@apollo/client";

export const getAssignments = gql`
        query {
          assignments {
            name
            submissions {
              grade
            }
          }
    }
      `;
