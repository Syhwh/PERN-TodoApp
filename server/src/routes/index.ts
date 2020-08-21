import { Router } from 'express';
import {getTodos} from '../controllers'

const router = Router();


// get todos
router.get('/todos',getTodos )

export default router