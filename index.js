// import cors from 'cors';
// import express, { Request, Response, NextFunction } from 'express';

// import router from './routes';

// const app = express();

// app.use(cors({
//   origin: 'https://mzassessoriafinanceira.com.br',
//   methods: 'GET, POST, OPTIONS',
//   allowedHeaders: 'Content-Type, Authorization',
//   credentials: true,
// }));

// app.use((req, res, next) => {
//   res.setHeader('Content-Type', 'application/json');
//   next();
// });

// app.use(express.json());
// app.use(router);

// export default app;

const express = require('express');
const cors = require('cors');

const app = express()
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Express Typescript on Vercel')
});

app.get('/ping', (req, res) => {
  res.send('pong 🏓')
});

app.listen(port, () => console.log(`Server is listening on ${port}`));
