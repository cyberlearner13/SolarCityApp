import React, { Component } from 'react';

class CustomerPreview extends Component {
	handleClick = () => {
		this.props.onClick(this.props.id);
	};
	render() {
		return (
			<div className="CustomerPreview" onClick={this.handleClick}>
				<div className="card">
				  <div className="card-header">
				    <p>{this.props.name}</p>
				  </div>
				</div>
			</div>
		);
	}
}

CustomerPreview.propTypes = {
	id: React.PropTypes.number.isRequired,
	name: React.PropTypes.string.isRequired,
	onClick: React.PropTypes.func.isRequired,
};

export default CustomerPreview;