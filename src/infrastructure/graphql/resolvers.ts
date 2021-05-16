import { IResolvers } from 'graphql-tools';

import { fromUrlDownloader } from './dependencies';

export const resolvers: IResolvers = {
    Query: {
        async audioFromUrl(_, { url }) {
            const audio = await fromUrlDownloader.execute(url);

            return audio;
        },
    },
};
