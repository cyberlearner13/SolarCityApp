import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

import renderServer from './renderServer';

server.get('/', (req, res) => {
	renderServer()
		.then(content => {
			res.render('index', {
				content
			});
		})
		.catch(console.error);
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
	console.log('Express listening on port ', config.port);
});