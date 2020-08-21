import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from '../database';


export const getTodos = async (req: Request, res: Response): Promise<Response> => {
	try {
		const response: QueryResult = await pool.query('SELECT * FROM todos');
		return res.status(200).json(response.rows)
	} catch (error) {
		throw new Error(`get todos Error ${error.message}`);

	}
}