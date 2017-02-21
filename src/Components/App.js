import React from 'react';
import Header from './Header';
import CustomerList from './CustomerList';
import Customer from './Customer';

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
		this.setState({
			pageHeader: this.state.customers[customerId].name,
			currentCustomerId: customerId
		});
	};

	currentContent() {
		if(this.state.currentCustomerId) {
			return <Customer {...this.state.customers[this.state.currentCustomerId]} />
		}

		return <CustomerList
			   onCustomerClick={this.fetchCustomer}
			   customers={this.state.customers} />;

	}
	render() {
		return (
			<div className="App">
				<Header message={this.state.pageHeader} />
				{this.currentContent()}
			</div>
		);
	}
}

export default App;