import React, { Component } from 'react';

class StartCard extends Component {
	render() {
		return (
		  <div className="card">
			  <button
				  onClick={this.props.handleUserType}
				  type="submit"
				  value="individual">
				  I'm an Individual
			  </button>
			  <p className="button-sub-text">
				  <strong>Individuals:</strong><em> To get the most accurate results, grab last year's tax return, a pay stub or statement showing your monthly premium amount (if applicable,) and an estimate of your out-of-pocket healthcare costs.</em></p>
					<button
				  onClick={this.props.handleUserType}
				  type="submit"
				  value="business">
				  I'm a Business Owner
			  </button>
			  <p className="button-sub-text">
				  <strong>Business Owners:</strong><em> Using your current payroll and healthcare costs, we'll provide a high-level estimate of projected healthcare costs.</em></p>
			</div>
	  );
	}
};


export default StartCard;
