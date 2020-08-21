import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import routes from './routes';



const app = express();
// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(routes);



app.listen(4000, () => {
	console.log('running in port 4000')
})