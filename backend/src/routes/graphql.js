import pkg from "apollo-server-express";
import { readFileSync } from "fs";
import { getUsernameFromToken } from "../auth/auth.js";
import { generateUserModel, getUser } from "../auth/permissions.js";
import assignmentGroupResolvers from "../resolvers/assignmentGroupResolvers.js";
import assignmentResolvers from "../resolvers/assignmentResolvers.js";
import courseResolvers from "../resolvers/courseResolvers.js";
import developmentResolvers from "../resolvers/developmentResolvers.js";
import fileResolvers from "../resolvers/fileResolvers.js";
import submissionResolvers from "../resolvers/submissionResolvers.js";
import userResolvers from "../resolvers/userResolvers.js";



const { ApolloServer } = pkg;

// Construct a schema, using GraphQL schema language
const typeDefs = readFileSync("./src/schemas/schema.graphql", "utf8");
// const schema = buildSchema(typeDefs);

const server = new ApolloServer({
  typeDefs,
  resolvers: [
    assignmentGroupResolvers,
    assignmentResolvers,
    courseResolvers,
    fileResolvers,
    submissionResolvers,
    userResolvers,
    developmentResolvers,
  ],
  context: async ({ req, res }) => {
    const token = req.token || req.cookies["token"] || "";
    if (token) {
      const username = await getUsernameFromToken(token);
      var user = await getUser(username);
      return { user, permissions: generateUserModel(user), res };
    }
    return { res };
  },
  playground: true,
});
export default server;
