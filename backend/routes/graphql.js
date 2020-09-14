import { graphqlHTTP } from "express-graphql";
import { buildSchema, graphql } from "graphql";
import { readFileSync } from "fs";
import { resolve } from "path";
import { Router } from "express";
const router = new Router();

// Construct a schema, using GraphQL schema language

const typeDefs = readFileSync(resolve(__dirname, "../schemas/schema.graphql"), "utf8");
const schema = buildSchema(typeDefs);
 
// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!";
  },
};

router.use("/", graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }));

export default router;
