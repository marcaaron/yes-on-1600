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
		return [
		  <button
        key="wwse-button-individual"
        className="wwse-select-button"
			  onClick={this.handleUserType}
			  type="submit"
			  value="individual">
			  I'm an Individual
		  </button>,

		  <div className="wwse-select-box" key="wwse-box-individual">
		    <div className="wwse-info-icon"><i className="fa fa-2x fa-info-circle"></i></div>
        <p>
			  <span className="h4">Individuals:</span> To get the most accurate results, grab last year's tax return, a pay stub or statement showing your monthly premium amount (if applicable), and an estimate of your out-of-pocket healthcare costs.
        </p>
      </div>,

      <button
        key="wwse-button-business"
        className="wwse-select-button"
		    onClick={this.handleUserType}
		    type="submit"
		    value="business">
		    I'm a Business Owner
	    </button>,

      <div className="wwse-select-box" key="wwse-box-business">
		    <div className="wwse-info-icon"><i className="fa fa-2x fa-info-circle"></i></div>
        <p>
			  <span className="h4">Business Owners:</span> Using your current payroll and healthcare costs, we'll provide a high-level estimate of projected healthcare costs.
        </p>
      </div>,

      <div className="wwse-disclaimer" key="wwse-disclaimer">
        <p>
          This calculator provides an <strong>estimate</strong> of how I-1600 would impact your bottom line. If you have significant partnership or capital income (e.g. more than $15,000 a year), you may want to consult a tax professional for a more complete assessment.
        </p>
      </div>
	  ];
	}
};


export default connect(null, { setUserType, incIndex })(StartCard);
