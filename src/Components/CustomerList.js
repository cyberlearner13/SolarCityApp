import React from 'react';
import CustomerPreview from './CustomerPreview';

const CustomerList = ({ customers }) => (
	<div className="CustomerList">
		{customers.map(customer =>
			<CustomerPreview key={customer.id} {...customer} />
		)}
	</div>
);

CustomerList.propTypes = {
	customers: React.PropTypes.array
};

export default CustomerList;