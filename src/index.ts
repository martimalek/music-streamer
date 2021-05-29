import express from 'express';

import { middleware as graphQLMiddleware } from '@infrastructure/graphql/middleware';
import { connectWithMongoDB } from '@infrastructure/mongodb';

const app = express();

app.use(graphQLMiddleware);

connectWithMongoDB();

app.listen(8080, () => console.log("Server started on port 8080"));
