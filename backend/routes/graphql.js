var { graphqlHTTP } = require("express-graphql");
var { buildSchema, graphql } = require("graphql");
const { readFileSync } = require("fs");
const { resolve } = require("path");
var express = require("express");
var router = express.Router();

// Construct a schema, using GraphQL schema language

const typeDefs = readFileSync(resolve(__dirname, "../schemas/schema.graphql"), "utf8");
var schema = buildSchema(typeDefs);
 
// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!";
  },
};

router.use("/", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));

module.exports = router;
