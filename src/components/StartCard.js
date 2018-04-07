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
				  <strong>Individuals:</strong><em> To get the most accurate results, grab last year's Tax Return, a paystub that includes insurance premium deduction and an estimate of your out-of-pocket healthcare costs.</em></p>
					<button
				  onClick={this.props.handleUserType}
				  type="submit"
				  value="business">
				  I'm a Business Owner
			  </button>
			  <p className="button-sub-text">
				  <strong>Business Owners:</strong><em> grab your HR person or accountant.</em></p>
			</div>
	  );
	}
};


export default StartCard;
