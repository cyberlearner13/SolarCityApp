import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import bodyParser from 'body-parser';

import express from 'express';
const server = express();

server.use(bodyParser.json());

server.use(sassMiddleware({
	src: path.join(__dirname, 'sass'),
	dest: path.join(__dirname, 'public')
}));

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

server.get('/about', (re, res) => {
	res.render('about');
});

server.get('/contact', (req, res) => {
	res.render('contact');
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
	console.log('Express listening on port ', config.port);
});