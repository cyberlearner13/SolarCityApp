import axios from 'axios';

export const fetchCustomer = customerId => {
	return axios.get(`/api/customers/${customerId}`)
		.then(resp => resp.data);
};

export const fetchCustomerList = () => {
	return axios.get(`/api/customers`)
		.then(resp => resp.data.customers);
};



