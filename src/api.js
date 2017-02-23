import axios from 'axios';

export const fetchCustomer = customerId => {
	return axios.get(`/api/customers/${customerId}`)
		.then(resp => resp.data);
};

export const fetchCustomerList = () => {
	return axios.get(`/api/customers`)
		.then(resp => resp.data.customers);
};

export const addCustomer = (name, age, address, city, state, zip, interest) => {
	return axios.post('/api/customers', {
		"name": name,
		"age": age,
		"address": address,
		"city": city,
		"state": state,
		"zip": zip,
		"interest": interest
	}).then(resp => resp.data)
};

