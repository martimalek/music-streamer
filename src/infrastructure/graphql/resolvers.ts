import { IResolvers } from 'graphql-tools';

import { audioFromUrlGetter } from './dependencies';

export const resolvers: IResolvers = {
    Query: {
        async getAudioFromUrl(_, { url }) {
            const audio = await audioFromUrlGetter.execute(url);

            return audio;

            /**
             * - Check whether the audio is already downloaded
             * - If it is retrieve it and send the title (in the future stream it)
             * - If it is not then it should download it and persist it as downloaded
             */
        },
    },
};
