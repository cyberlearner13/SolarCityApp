import axios from 'axios';

export const fetchCustomer = customerId => {
	return axios.get(`/api/customers/${customerId}`)
		.then(resp => resp.data);
};