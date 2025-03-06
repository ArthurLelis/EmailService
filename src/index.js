import cors from 'cors';
import express from 'express';

import router from './routes';

const port = 3005;
const app = express()

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => console.log(`Server is listening on ${port}`));
