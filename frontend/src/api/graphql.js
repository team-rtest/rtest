import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

export const client = new ApolloClient({
  link: createHttpLink({
    uri: `${process.env.REACT_APP_API}/graphql`,
    credentials: 'include',
  }),
  cache: new InMemoryCache(),
});
