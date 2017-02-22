import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

const getApiUrl = customerId => {
  if (customerId) {
    return `${config.serverUrl}/api/customers/${customerId}`;
  }
  return `${config.serverUrl}/api/customers`;
};

const getInitialData = (customerId, apiData) => {
  if (customerId) {
    return {
      currentCustomerId: apiData.id,
      customers: {
        [apiData.id]: apiData
      }
    };
  }
  return {
    customers: apiData.customers
  };
};

const renderServer = (customerId) =>
	axios.get(getApiUrl(customerId))
		.then(resp => {
			const initialData = getInitialData(customerId, resp.data);
			return {
				initialMarkup: ReactDOMServer.renderToString(
					<App initialData={initialData}/>
				),
				initialData
			}; 
		});

export default renderServer;