import React from 'react';
import Header from './Header';
import CustomerPreview from './/CustomerPreview';
import axios from 'axios';

class App extends React.Component {
	state = {
		pageHeader: 'SolarCity',
		customers: []
	};

	componentDidMount() {
		//ajax call to fetch data from api
		axios.get('/api/customers')
			.then(resp => {
				this.setState({
					customers: resp.data.customers
				});
			})
			.catch(console.error);
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