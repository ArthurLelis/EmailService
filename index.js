// import cors from 'cors';
// import express, { Request, Response, NextFunction } from 'express';

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

// export default app;

import cors from 'cors';
import express from 'express';

import router from './src/routes';

const port = 3005;
const app = express()

app.use(cors());
app.use(router);

// app.get('/', (req, res) => {
//   res.send('Express Typescript on Vercel')
// });

// app.get('/ping', (req, res) => {
//   res.send('pong 🏓')
// });

app.listen(port, () => console.log(`Server is listening on ${port}`));
