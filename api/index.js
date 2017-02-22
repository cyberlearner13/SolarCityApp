import express from 'express';
import data from '../src/testData';

const router = express.Router();
const customers = data.customers.reduce((obj, customer) => {
	obj[customer.id] = customer;
	return obj;
}, {});

router.get('/customers', (req, res) => {
	res.send({ 
		customers: customers
	});
});

router.get('/customers/:customerId', (req, res) => {
	let customer = customers[req.params.customerId];
	res.send(customer);
});

export default router;