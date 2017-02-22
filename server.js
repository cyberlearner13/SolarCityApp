import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

import renderServer from './renderServer';

server.get(['/','/customer/:customerId'], (req, res) => {
	renderServer(req.params.customerId)
		.then(({ initialMarkup, initialData }) => {
			res.render('index', {
				initialMarkup,
				initialData
			});
		})
		.catch(console.error);
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
	console.log('Express listening on port ', config.port);
});