import * as express from 'express';
import { CreateAccount } from '../controller';

const router = express.Router();

router.post('/accounts', CreateAccount);

export default router;