import cors from 'cors';
import express from 'express';

import routes from './routes';

const port = 8787;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`🔥 Server started at `));

export default app;
