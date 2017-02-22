import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
	assert.equal(null, err);
	
	mdb = db;
});

const router = express.Router();

router.get('/customers', (req, res) => {
	let customers = {};
	mdb.collection('customers').find({})
		.each((err, customer) => {
			assert.equal(null, err);

			if(!customer) {
				res.send({ customers });
				return;
			}

			customers[customer.id] = customer;
		});
});

router.get('/customers/:customerId', (req, res) => {
	mdb.collection('customers')
		.findOne({ id: Number(req.params.customerId) })
		.then(customer => res.send(customer))
		.catch(console.error);
});

export default router;