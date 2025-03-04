import { Router } from 'express';
import { sendEmailMZ } from './useCases/mz';

const router = Router();

router.post('/mz', sendEmailMZ);

export default router;
