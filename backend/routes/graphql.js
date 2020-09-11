var { graphqlHTTP } = require('express-graphql');
var { buildSchema, graphql } = require('graphql');
var express = require('express');
var router = express.Router();

// Construct a schema, using GraphQL schema language

// TODO Feed schema.graphql to this
var schema = buildSchema();

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

router.use('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));

module.exports = router;
