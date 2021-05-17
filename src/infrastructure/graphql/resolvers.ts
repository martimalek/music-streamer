import { IResolvers } from 'graphql-tools';

import { fromUrlDownloader } from './dependencies';

export const resolvers: IResolvers = {
    Query: {
        async getAudioFromUrl(_, { url }) {
            const audio = await fromUrlDownloader.execute(url);

            return audio;

            /**
             * - Check whether the audio is already downloaded
             * - If it is retrieve it and send the title (in the future stream it)
             * - If it is not then it should download it and persist it as downloaded
             */
        },
    },
};
