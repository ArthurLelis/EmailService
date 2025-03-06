// import cors from 'cors';
// import express, { Request, Response, NextFunction } from 'express';

// import routes from './routes';

// const port = 8787;
// const app = express();

// app.use(cors({
//   origin: 'https://mzassessoriafinanceira.com.br',
//   methods: 'GET, POST, OPTIONS',
//   allowedHeaders: 'Content-Type, Authorization',
//   credentials: true,
// }));

// app.options("*", cors());

// app.use((request: Request, response: Response, next: NextFunction): void => {
//   response.header("Access-Control-Allow-Origin", "https://mzassessoriafinanceira.com.br");
//   response.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//   response.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

//   console.log(request);

//   if (request.method === 'OPTIONS') {
//     response.sendStatus(204);
//   }

//   next();
// });

// app.use(express.json());
// app.use(routes);

// app.listen(port, () => console.log(`🔥 Server started at `));

// export default app;










import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
