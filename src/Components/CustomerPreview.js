import React from 'react';

const CustomerPreview = (customer) => (
	<div className="CustomerPreview">
		<div className="card">
		  <div className="card-header">
		    <p>{customer.name}</p>
		  </div>
		  <div className="card-block">
		    <blockquote className="card-blockquote">
		      <p>{customer.interest}</p>
		    </blockquote>
		  </div>
		</div>
	</div>
);

export default CustomerPreview;