import { gql } from "@apollo/client";

export const getAssignments = gql`
  query {
    assignments {
      name
      _id
      mySubmission {
        student {
          _id
          username
        }
        grade
      }
      submissions {
        grade
      }
    }
  }
`;

export const getAssignment = gql `
  query getAssignment($id: ID!){
    assignment(id: $id){
      name
      maxGrade
      mySubmission{
        grade
        submittedAt
        peerGrades{
          grader{
            _id
          }
          grade
          comment
        }
      }
    }
  }
`;


