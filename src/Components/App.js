import React from 'react';
import Header from './Header';
import CustomerList from './CustomerList';

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
				<CustomerList customers={this.state.customers} />
			</div>
		);
	}
}

export default App;