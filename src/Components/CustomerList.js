import React from 'react';
import CustomerPreview from './CustomerPreview';

const CustomerList = ({ customers, onCustomerClick }) => (
	<div className="CustomerList">
		{customers.map(customer =>
			<CustomerPreview 
			onClick={onCustomerClick}
			key={customer.id} {...customer} />
		)}
	</div>
);

CustomerList.propTypes = {
	customers: React.PropTypes.array,
	onCustomerClick: React.PropTypes.func.isRequired,
};

export default CustomerList;