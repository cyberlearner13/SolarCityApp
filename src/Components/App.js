import React from 'react';
import Header from './Header';
import CustomerList from './CustomerList';

const pushState = (obj, url) =>
	window.history.pushState(obj, '', url);

class App extends React.Component {
	state = {
		pageHeader: 'SolarCity',
		customers: this.props.initialCustomers
	};

	componentDidMount() {
		
	}

	fetchCustomer = (customerId) => {
		pushState(
			{currentCustomerId: customerId },
			`/customer/${customerId}`
		);
	};

	render() {
		return (
			<div className="App">
				<Header message={this.state.pageHeader} />
				<CustomerList 
				onCustomerClick={this.fetchCustomer}
				customers={this.state.customers} />
			</div>
		);
	}
}

export default App;