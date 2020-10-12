import { readFileSync } from "fs";

import resolvers from "../resolvers/resolvers.js";
import assignmentGroupResolvers from "../resolvers/assignmentGroupResolvers.js";
import assignmentResolvers from "../resolvers/assignmentResolvers.js";
import courseResolvers from "../resolvers/courseResolvers.js";
import fileResolvers from "../resolvers/fileResolvers.js";
import submissionResolvers from "../resolvers/submissionResolvers.js";
import userResolvers from "../resolvers/userResolvers.js";

import pkg from "apollo-server-express";
import { getUsernameFromToken } from "../auth/auth.js";
const { ApolloServer } = pkg;

// Construct a schema, using GraphQL schema language
const typeDefs = readFileSync("./src/schemas/schema.graphql", "utf8");
// const schema = buildSchema(typeDefs);

const server = new ApolloServer({
  typeDefs,
  resolvers: [
    resolvers,
    assignmentGroupResolvers,
    assignmentResolvers,
    courseResolvers,
    fileResolvers,
    submissionResolvers,
    userResolvers,
  ],
  context: ({ req }) => {
    const token = req.token || "";
    var user = "noauth";
    if (token) {
      user = getUsernameFromToken(token);
    }
    return { user };
  },
});
export default server;
