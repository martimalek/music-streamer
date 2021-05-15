import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';

import * as typeDefs from './schema.graphql';
import { resolvers } from './resolvers';

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export const rootValue = {
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