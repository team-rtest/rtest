import { readFileSync } from "fs";
import { resolvers } from "../resolvers/resolvers.js";
import pkg from "apollo-server-express";
import { getUsernameFromToken } from "../auth/auth.js";
const { ApolloServer } = pkg;

// Construct a schema, using GraphQL schema language
const typeDefs = readFileSync("./src/schemas/schema.graphql", "utf8");
// const schema = buildSchema(typeDefs);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.token || "";
    const user = "noauth";
    if (token) {
      user = getUsernameFromToken(token);
    }
    return { user };
  },
});
export default server;
