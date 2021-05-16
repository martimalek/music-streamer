import express from 'express';

import { middleware as graphQLMiddleware } from '@infrastructure/graphql/middleware';

const app = express();

app.use(graphQLMiddleware);

app.listen(8080, () => console.log("Server started on port 8080"));
