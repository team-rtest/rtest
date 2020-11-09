import { gql } from "@apollo/client";

export const retrieveUserInfo = gql`
  query {
    me {
      createdAt
      firstName
      lastName
      email
    }
  }
`;

export const getProfilePicUploadUrl = gql`
  query {
    getPropicUrl
  }
`;
