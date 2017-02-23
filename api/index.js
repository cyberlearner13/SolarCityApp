import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';
var id=5;

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

router.post('/customers', (req, res) => {
	id++; // update the id number

	const name = req.body.name;
	const age = req.body.age;
	const address = req.body.address;
	const city = req.body.city;
	const state = req.body.state;
	const zip = req.body.zip;
	const interest = req.body.interest;
	//validation
	mdb.collection('customers').insert({
		"id": id,
		"name": name,
		"age": age,
		"address": address,
		"city": city,
		"state": state,
		"zip": zip,
		"interest": interest
	}).catch(error => {
		console.error(error);
		res.status(404).send('Bad Request');
	});

	console.log('New customer added to customers collection');
});

export default router;