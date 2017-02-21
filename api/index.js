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

export default router;