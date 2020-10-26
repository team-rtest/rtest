import { client } from "./graphql";
import { gql } from "@apollo/client";

export const uploadSubmissionFile = (
  course,
  assignment,
  submission,
  filename
) => {
  client
    .mutate({
      mutation: gql` mutation { addSubmissionFile(course, assignment, submission, filename)}`,
    })
    .then((result) => console.log(result));
};

export const geturl = gql`
        query getPresigned($key: String!, $bucket: String!) { getPresignedUpload(key: $key, bucket: $bucket)}
`;

export const getUploadPath = gql`
  query {
    course {
      id
      assignments {
        name
        submissions {
          user {
            firstName
            lastName
          }
        }
      }
    }
  }
`;
