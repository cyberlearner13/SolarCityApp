import React, { Component } from 'react';

class CustomerPreview extends React.Component {
	handleClick = () => {
		console.log(this.props.interest);
	};
	render() {
		return (
			<div className="CustomerPreview" onClick={this.handleClick}>
				<div className="card">
				  <div className="card-header">
				    <p>{this.props.name}</p>
				  </div>
				  <div className="card-block">
				    <blockquote className="card-blockquote">
				      <p>{this.props.interest}</p>
				    </blockquote>
				  </div>
				</div>
			</div>
		);
	}
}

CustomerPreview.propTypes = {
	name: React.PropTypes.string.isRequired,
	interest: React.PropTypes.string.isRequired,
}

export default CustomerPreview;