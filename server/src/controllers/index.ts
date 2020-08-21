import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from '../database';


export const getTodos = async (req: Request, res: Response): Promise<Response> => {
	try {
		const response: QueryResult = await pool.query('SELECT * FROM todos');
		return res.status(200).json(response.rows);
	} catch (error) {
		throw new Error(`get todos Error ${error.message}`);

	}
}

export const getTodoById = async (req: Request, res: Response): Promise<Response> => {
	try {
		const id = parseInt(req.params.id);
		const response: QueryResult = await pool.query('SELECT * FROM todos WHERE todo_id=$1', [id])
		return res.status(200).json(response.rows);
	} catch (error) {
		throw new Error(`getTodoById Error ${error.message}`);
	}
}

export const createTask = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { title, description } = req.body;
		await pool.query('INSERT INTO todos (title, description) VALUES ($1,$2)', [title, description]);
		return res.status(200).json({
			message: 'Task created successfully',
			body: {
				task: {
					title,
					description
				}
			}
		})
	} catch (error) {
		throw new Error(`createTask Error ${error.message}`);
	}
}

export const deleteTask = async (req: Request, res: Response): Promise<Response> => {
	try {
		const id = parseInt(req.params.id);
		await pool.query('DELETE FROM todos WHERE todo_id = $1', [id]);
		return res.json({ message: 'task deleted successfully' });
	} catch (error) {
		throw new Error(`deleteTask Error ${error.message}`);
	}
}

export const editTask = async (req: Request, res: Response): Promise<Response> => {
	try {
		const id = parseInt(req.params.id);
		const { title, description } = req.body;
		const response: QueryResult = await pool.query('UPDATE todos SET title = $1, description = $2 WHERE todo_id = $3', [title, description, id]);
		return res.json({ message: 'Task updated successfully' })
	} catch (error) {
		throw new Error(`updateTask Error ${error.message}`);
	}
}