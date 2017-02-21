import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

const renderServer = () =>
	axios.get(`${config.serverUrl}/api/customers`)
		.then(resp => {
			return ReactDOMServer.renderToString(
				<App initialCustomers={resp.data.customers}/>
			);
		});

export default renderServer;