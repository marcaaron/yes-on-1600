import React, { Component } from "react";
import { addCommas, removeCommas } from '../helpers/helper-functions';
import DonateButton from '../components/DonateButton';

const CalculationDocs = () => {
  return(
    <a style={{fontSize:'0.9em', margin:'1.5em auto'}} href="https://wholewashington.nationbuilder.com/savings_estimator_business_calculations" rel="noopener noreferrer" target="_blank">Calculation Documentation</a>
  );
};

class BusinessResults extends Component {
  render() {
	const annualCost = parseInt(removeCommas(this.props.vars[1]),10);
    return (
      <div className={`results ${this.props.resultStyle}`}>
        {annualCost - this.props.futureCost > 0 ? [
          <div className="cost-bars-container" key="bars-cont">
            <div className="middle-box">
              <h2>Current Annual Healthcare Costs</h2>
            </div>
            <div className="color-bar-box">
              <div className="color-bar red">
                <span className="color-bar-text">${addCommas(annualCost)}</span>
              </div>
            </div>
            <div className="middle-box">
              <h2>Projected Annual Healthcare Costs</h2>
            </div>
            <div className="color-bar-box">
              <div style={this.props.colorBarGreen} className="color-bar green">
                <span className="color-bar-text">${addCommas(this.props.futureCost)}</span>
              </div>
            </div>
          </div>
	  ] :[
          <div className="header-box">
			  <h1>Your Benefit</h1>
		  </div>,
		  <div className="message-box">
			<p>Universal Healthcare means high quality, comprehensive coverage (including vision and dental) for every employee, regardless of number of hours worked. A healthy work force is a more productive work force.</p>
		  </div>
	  ]
  		}

        <div className="percentages">
          <div className="row">
            <p>
              Employees Covered<br />Under Current System
            </p>
            <p>
              Employees Covered<br />Under I-1600
            </p>
          </div>
          <div className="row">
            <div className="col">
              <span
                style={this.props.rangeStyle}
                className="percentage result-percentage"
              >
                {this.props.range}%
              </span>
            </div>
            <div className="col">
              <span className="percentage result-percentage">100%</span>
            </div>
          </div>
        </div>
        {annualCost - this.props.futureCost > 0 ? (
          <div className="col white">
            <h2 className="results-heading">Total Projected Savings</h2>
            <span className="results-sub-heading">
              While Covering All Employees
            </span>
            <span className="results-total">
              ${addCommas(annualCost - this.props.futureCost)}/year <sup>*</sup>
            </span>
            <span className="results-total-year" />
            <div className="results-disclaimer">
              <span>
                <em>
                  <sup>*</sup> Results vary based on company size and individual differences in Gross&nbsp;Pay
                </em>
              </span>
            </div>
          </div>
        ) : (
          <div className="col white">
            <h2 className="results-heading">Total Contribution</h2>
            <span className="results-sub-heading">
              (To Cover All Employees)
            </span>
            <span className="results-total">
              ${addCommas(parseInt(this.props.futureCost / 12, 10))}/month <sup>*</sup>
            </span>
            <span className="results-total-year">
              (${addCommas(this.props.futureCost)}/year)
            </span>
            <div className="results-disclaimer">
              <span>
                <em>
                  <sup>*</sup> Results vary based on company size and individual differences in Gross Pay. We're working on an enhanced tool that takes those variables into account and displays an even more accurate result. Stay tuned.
                </em>
              </span>
            </div>
          </div>
        )}

        <DonateButton />
        <CalculationDocs/>
      </div>
    );
  }
}
export default BusinessResults;
