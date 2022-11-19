import express from 'express';
import "@shared/container";
import "express-async-errors";

import { router } from './routes';
import { errorHandler } from '@shared/errors/handlers/errorHandler';

const app = express();

app.use(express.json());
app.use(router);

app.use(errorHandler);

export { app };