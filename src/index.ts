import express from 'express';
import cors from 'cors';
import routes from './routes';
import { VercelRequest, VercelResponse } from '@vercel/node';

const port = 8787;
const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000', 'https://mzassessoriafinanceira.com.br/'],
    methods: ['POST'],
    allowedHeaders: ['Content-Type'],
  })
);
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`🔥 Server started at `));

export default (
  request: VercelRequest,
  response: VercelResponse
) => app(request, response);
