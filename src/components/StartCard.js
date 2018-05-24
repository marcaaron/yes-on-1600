import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserType, incIndex } from '../actions';

class StartCard extends Component {

  handleUserType = (e) => {
    e.preventDefault();
    this.props.setUserType(e.target.value);
    this.props.incIndex();
  }

	render() {
		return (
		  <div className="card">
			  <button
				  onClick={this.handleUserType}
				  type="submit"
				  value="individual">
				  I'm an Individual
			  </button>
			  <p className="button-sub-text">
				  <strong>Individuals:</strong><em> To get the most accurate results, grab last year's tax return, a pay stub or statement showing your monthly premium amount (if applicable), and an estimate of your out-of-pocket healthcare costs.</em></p>
					<button
				    onClick={this.handleUserType}
				    type="submit"
				    value="business">
				    I'm a Business Owner
			  </button>
			  <p className="button-sub-text">
				  <strong>Business Owners:</strong><em> Using your current payroll and healthcare costs, we'll provide a high-level estimate of projected healthcare costs.</em></p>

        <div className="start-disclaimer">
          This calculator provides an <em><strong>estimate</strong></em> of how I-1600 would impact your bottom line. If you have significant partnership or capital income (e.g. more than $15,000 a year), you may want to consult a tax professional for a more complete assessment.
        </div>
			</div>
	  );
	}
};


export default connect(null, { setUserType, incIndex })(StartCard);
