import React from 'react';
import ReactDom from 'react-dom';
import App from './Components/App';
import axios from 'axios';

//ajax call to fetch data from api
axios.get('/api/customers')
	.then(resp => {
		ReactDom.render(
			<App initialCustomers={resp.data.customers} />,
			document.getElementById('root')
		);
	})
	.catch(console.error);