import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';

import * as typeDefs from './schema.graphql';
import { resolvers } from './resolvers';

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
