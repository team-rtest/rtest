var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var express = require('express');
var router = express.Router();

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

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
