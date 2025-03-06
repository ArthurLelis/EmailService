import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';

import router from './routes';

const app = express();

app.use(cors({
  origin: 'https://mzassessoriafinanceira.com.br',
  methods: 'GET, POST, OPTIONS',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true,
}));

app.use(express.json());
app.use(router);

export default app;
