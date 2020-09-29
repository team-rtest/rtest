import { buildSchema, graphql } from "graphql";
import { readFileSync } from "fs";
import { resolvers } from "../resolvers/CourseResolvers";
import { ApolloServer } from "apollo-server-express";

// Construct a schema, using GraphQL schema language
const typeDefs = readFileSync("./schemas/schema.graphql", "utf8");
// const schema = buildSchema(typeDefs);

const server = new ApolloServer({ typeDefs, resolvers });
export default server;
