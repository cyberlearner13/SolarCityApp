import React from 'react';

class Customer extends React.Component {
	render() {
		return (
			<div className="Customer">
				{this.props.interest}
			</div>
		);
	}
}

Customer.propTypes = {
	interest: React.PropTypes.string.isRequired
};

export default Customer;