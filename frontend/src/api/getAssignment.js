import { client } from "./graphql";
import { gql } from "@apollo/client";

export const getAssignments = (
  ) => {
    client
      .query({
        query: gql` query{
          assignments{
            _id
            name
          }
        }
        `,
      })
      .then((result) => console.log(result));
  };