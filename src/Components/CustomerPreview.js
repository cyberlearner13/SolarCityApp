import React from 'react';

const CustomerPreview = (customer) => (
	<div className="CustomerPreview">
		<div>
			{customer.name}
		</div>
		<div>
			{customer.interest}
		</div>
	</div>
);

export default CustomerPreview;