import React from 'react';

class Customer extends React.Component {
	render() {
		return (
			<div className="Customer">
				{this.props.id}
			</div>
		);
	}
}

Customer.propTypes = {
	id: React.PropTypes.number.isRequired
};

export default Customer;