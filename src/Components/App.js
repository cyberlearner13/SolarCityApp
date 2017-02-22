import React from 'react';
import Header from './Header';
import CustomerList from './CustomerList';
import Customer from './Customer';
import * as api from '../api';

const pushState = (obj, url) =>
	window.history.pushState(obj, '', url);

class App extends React.Component {
	static propTypes = {
		initialData: React.PropTypes.object.isRequired
	};
	state = this.props.initialData;

	componentDidMount() {
		
	}

	fetchCustomer = (customerId) => {
		pushState(
			{currentCustomerId: customerId },
			`/customer/${customerId}`
		);
		api.fetchCustomer(customerId).then(customer => {
			this.setState({
				currentCustomerId: customer.id,
				customers: {
					...this.state.customers,
					[customer.id]: customer
				}
			});
		});
	};

	fetchCustomerList = () => {
		pushState(
			{currentCustomerId: null },
			'/'
		);
		api.fetchCustomerList().then(customers => {
			this.setState({
				currentCustomerId: null,
				customers
			});
		});
	};

	currentCustomer() {
		return this.state.customers[this.state.currentCustomerId];
	}

	pageHeader() {
		if(this.state.currentCustomerId) {
			return this.currentCustomer().name;
		}

		return 'Customers';
	}
	currentContent() {
		if(this.state.currentCustomerId) {
			return <Customer
			customerListClick={this.fetchCustomerList}
			{...this.currentCustomer()} />;
		}

		return <CustomerList
			   onCustomerClick={this.fetchCustomer}
			   customers={this.state.customers} />;

	}
	render() {
		return (
			<div className="App">
				<Header message={this.pageHeader()} />
				{this.currentContent()}
			</div>
		);
	}
}

export default App;