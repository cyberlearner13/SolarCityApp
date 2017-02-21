import express from 'express';
import data from '../src/testData';

const router = express.Router();

router.get('/customers', (req, res) => {
	res.send({ customers: data.customers });
});

export default router;