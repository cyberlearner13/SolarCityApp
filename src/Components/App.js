import React from 'react';
import Header from './Header';
import CustomerPreview from './/CustomerPreview';

class App extends React.Component {
	state = {
		pageHeader: 'SolarCity',
		customers: this.props.initialCustomers
	};

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="App">
				<Header message={this.state.pageHeader} />
				<div>
					{this.state.customers.map(customer => 
						<CustomerPreview key={customer.id} {...customer} />
					)}
				</div>
			</div>
		);
	}
}

export default App;