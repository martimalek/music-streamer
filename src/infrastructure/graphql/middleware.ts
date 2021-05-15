import { graphqlHTTP } from 'express-graphql';

import { schema, rootValue } from '@infrastructure/graphql/schema';

// Middleware to handle incoming requests
export const middleware = graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
});
