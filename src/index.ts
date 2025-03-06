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

import express, { Request, Response } from 'express';

const app = express()
const port = process.env.PORT || 8080

app.get('/', (_req: Request, res: Response) => {
  return res.send('Express Typescript on Vercel')
})

app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})
