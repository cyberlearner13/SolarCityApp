import React from 'react';

class Customer extends React.Component {
	render() {
		return (
			<div className="Customer">
				{this.props.interest}
				<div>
					<button onClick={this.props.customerListClick}>Back</button>
				</div>
			</div>
		);
	}
}

Customer.propTypes = {
	interest: React.PropTypes.string.isRequired,
	customerListClick: React.PropTypes.func.isRequired,
};

export default Customer;