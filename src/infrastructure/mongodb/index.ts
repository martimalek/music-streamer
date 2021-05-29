import { Db, MongoClient } from 'mongodb';

const MONGO_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@music-streamer-cluster.gglos.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

export let db: Db;

export const connectWithMongoDB = (): void => {
    MongoClient.connect(MONGO_URI, { useUnifiedTopology: true }, (err, client) => {
        if (err) return console.error(err);
        db = client.db();

        console.log('Successful connection to MongoDB');
    });
};
