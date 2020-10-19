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

export const geturl = (key, bucket) => {
  gql`
        query { getPresignedUpload(key, bucket)}`,
}

export const getUploadPath = gql`
        query {
          course{
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