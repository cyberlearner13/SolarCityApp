import React from 'react';
import Header from './Header';
import CustomerList from './CustomerList';
import Customer from './Customer';
import * as api from '../api';
import axios from 'axios';

const pushState = (obj, url) =>
	window.history.pushState(obj, '', url);

const onPopState = handler => {
	window.onpopstate = handler;
};

class App extends React.Component {
	static propTypes = {
		initialData: React.PropTypes.object.isRequired
	};
	state = this.props.initialData;

	handleSubmit = (event) => {
		return axios.post('/api/customers', {
			"name": this.refs.InputName.value,
			"age": this.refs.InputAge.value,
			"address": this.refs.InputAddress.value,
			"city": this.refs.InputCity.value,
			"state": this.refs.InputState.value,
			"zip": this.refs.InputZIP.value,
			"interest": this.refs.InputInterest.value
		}).then(resp => resp.data)
	};
	componentDidMount() {
		onPopState((event) => {
			this.setState({
				currentCustomerId: (event.state || {}).currentCustomerId
			})
		});
	}

	componentWillUnMount() {
		onPopState(null);
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
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
    							<label htmlFor="InputName">Name</label>
    							<input type="text" className="form-control" ref="InputName" aria-describedby="nameHelp" placeholder="Enter name" />
    						</div>
    						<div className="form-group">
    							<label htmlFor="InputAge">Age</label>
    							<input type="text" className="form-control" ref="InputAge" aria-describedby="ageHelp" placeholder="Enter age " />
    						</div>
    						<div className="form-group">
    							<label htmlFor="InputAddress">Address</label>
    							<input type="text" className="form-control" ref="InputAddress" aria-describedby="addressHelp" placeholder="Enter address " />

    							<label htmlFor="InputCity">City</label>
    							<input type="text" className="form-control" ref="InputCity" aria-describedby="cityHelp" placeholder="Enter city " />

    							<label htmlFor="InputState">State</label>
    							<input type="text" className="form-control" ref="InputState" aria-describedby="stateHelp" placeholder="Enter state " />

    							<label htmlFor="InputZIP">ZIP</label>
    							<input type="text" className="form-control" ref="InputZIP" aria-describedby="zipHelp" placeholder="Enter zip " />
    						</div>
    						<div className="form-group">
    							<label htmlFor="InputInterest">Interest</label>
    							<textarea type="text" className="form-control" ref="InputInterest" aria-describedby="interestHelp" placeholder="Enter interest " />
    						</div>
    						<button type="submit" className="btn btn-primary">Im interested</button>
						</form>
					</div>
					<div className="col-md-4">
						<div className="App">
							<Header message={this.pageHeader()} />
							{this.currentContent()}
						</div>
					</div>	
				</div>
			</div>
		);
	}
}

export default App;