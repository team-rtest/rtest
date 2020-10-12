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
