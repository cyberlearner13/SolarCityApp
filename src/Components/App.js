import React from 'react';
import Header from './Header';
import CustomerList from './CustomerList';
import Customer from './Customer';
import * as api from '../api';

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
						<form id="form">
							<div className="form-group">
    							<label htmlFor="exampleInputName">Name</label>
    							<input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter name" />
    						</div>
    						<div className="form-group">
    							<label htmlFor="exampleInputAge">Age</label>
    							<input type="text" className="form-control" id="exampleInputAge" aria-describedby="ageHelp" placeholder="Enter age " />
    						</div>
    						<div className="form-group">
    							<label htmlFor="exampleInputAddress">Address</label>
    							<input type="text" className="form-control" id="exampleInputAddress" aria-describedby="addressHelp" placeholder="Enter address " />

    							<label htmlFor="exampleInputCity">City</label>
    							<input type="text" className="form-control" id="exampleInputCity" aria-describedby="cityHelp" placeholder="Enter city " />

    							<label htmlFor="exampleInputState">State</label>
    							<input type="text" className="form-control" id="exampleInputState" aria-describedby="stateHelp" placeholder="Enter state " />

    							<label htmlFor="exampleInputZIP">ZIP</label>
    							<input type="text" className="form-control" id="exampleInputZIP" aria-describedby="zipHelp" placeholder="Enter zip " />
    						</div>
    						<div className="form-group">
    							<label htmlFor="exampleInputInterest">Interest</label>
    							<textarea type="text" className="form-control" id="exampleInputInterest" aria-describedby="interestHelp" placeholder="Enter interest " />
    						</div>
    						<button type="submit" className="btn btn-primary">Submit</button>
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