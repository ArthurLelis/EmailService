import express from 'express';
import { IncomingMessage, ServerResponse } from 'http';

const app = express();

app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from Express on Vercel!' });
});

// Vercel handler
export default (req: IncomingMessage, res: ServerResponse) => {
  app(req, res);
};
