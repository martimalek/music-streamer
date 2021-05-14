import 'graphql-import-node';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import * as typeDefs from './schema.graphql';

// Create a server
const app = express();

// Create a schema and a root resolver
const schema = makeExecutableSchema({
  typeDefs,
});

const rootValue = {
  books: [
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
    },
    {
      title: "The Wise Man's Fear",
      author: "Patrick Rothfuss",
    },
  ],
};

// Use those to handle incoming requests
app.use(graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));

// Start the server
app.listen(8080, () => console.log("Server started on port 8080"));
