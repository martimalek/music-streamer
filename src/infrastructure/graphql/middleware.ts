import { graphqlHTTP } from 'express-graphql';

import { schema } from '@infrastructure/graphql/schema';

// Middleware to handle incoming requests
export const middleware = graphqlHTTP({
    schema,
    graphiql: true,
});
