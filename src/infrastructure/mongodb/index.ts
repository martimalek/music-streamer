import { connect } from 'mongoose';

const MONGO_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@music-streamer-cluster.gglos.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

export const connectWithMongoDB = (): void => {
    connect(MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
        .then(() => console.log('Successful connection to MongoDB'))
        .catch((err) => console.error('Err while connecting to DB ', err));
};
