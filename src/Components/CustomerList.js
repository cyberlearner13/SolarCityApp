import React from 'react';
import CustomerPreview from './CustomerPreview';

const CustomerList = ({ customers, onCustomerClick }) => (
	<div className="CustomerList">
		{Object.keys(customers).map(customerId =>
			<CustomerPreview 
			onClick={onCustomerClick}
			key={customerId}
			{...customers[customerId]} />
		)}
	</div>
);

CustomerList.propTypes = {
	customers: React.PropTypes.object,
	onCustomerClick: React.PropTypes.func.isRequired,
};

export default CustomerList;