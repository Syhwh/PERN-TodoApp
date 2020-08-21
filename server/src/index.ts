import express from 'express';
import cors from 'cors';

import routes from './routes';



const app = express();
// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(routes);



app.listen(4000, () => {
	console.log('running in port 4000')
})