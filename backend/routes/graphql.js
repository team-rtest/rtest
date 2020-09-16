import { graphqlHTTP } from 'express-graphql';
import { buildSchema, graphql } from 'graphql';
import { readFileSync } from "fs";
import { Router } from 'express';
import { verifyUser } from "../auth.js";

const router = new Router();

// Construct a schema, using GraphQL schema language
const typeDefs = readFileSync(
  "./schemas/schema.graphql",
  "utf8"
);
const schema = buildSchema(typeDefs);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!";
  },
};

router.use(
  "/",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

export default router;
