import { Router } from 'express';
import { sendEmailMZ, reply } from './useCases/mz';

const router = Router();

// MZ Assessoria Financeira
router.post('/mz', sendEmailMZ);
router.post('/mz/reply', reply);

export default router;
