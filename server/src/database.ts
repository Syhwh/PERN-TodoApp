import { Pool } from 'pg';
import * as dotenv  from 'dotenv';
dotenv.config();

export const pool = new Pool({
	user: `${process.env.DB_USER}`,
	host: 'localhost',
	password: '',
	database: 'todoapp',
	port: 5432
});