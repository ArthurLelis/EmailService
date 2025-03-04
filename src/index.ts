import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';

const port = 8787;
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://mzassessoriafinanceira.com.br/"], // Adapte conforme necessário
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("/mz", (req: Request, res: Response) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).send();
});

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`🔥 Server started at `));

export default app;
