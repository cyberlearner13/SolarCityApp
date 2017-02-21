import express from 'express';

const router = express.Router();

router.get('/', (re, res) => {
	res.send({ data: []});
});

export default router;