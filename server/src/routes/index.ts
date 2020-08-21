import { Router } from 'express';

import { getTodos, getTodoById, createTask, deleteTask, editTask } from '../controllers'

const router = Router();


// get tasks
router.get('/todos', getTodos);
router.get('/todos/:id', getTodoById);
//create task
router.post('/todos',createTask);
//delete task
router.delete('/todos/:id',deleteTask);
// edit task
router.put('/todos/:id',editTask)
export default router