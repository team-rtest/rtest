import { readFileSync } from "fs";
import { resolvers } from "../resolvers/resolvers.js";
import pkg from 'apollo-server-express';
const { ApolloServer } = pkg;

// Construct a schema, using GraphQL schema language
const typeDefs = readFileSync("./src/schemas/schema.graphql", "utf8");
// const schema = buildSchema(typeDefs);

const server = new ApolloServer({ typeDefs, resolvers });
export default server;
