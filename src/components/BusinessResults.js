import React from "react";
import { addCommas, removeCommas } from '../helpers/helper-functions';

const CalculationDocs = () => {
  return(
    <a style={{fontSize:'0.9em', margin:'1.5em auto'}} href="https://wholewashington.nationbuilder.com/savings_estimator_business_calculations" rel="noopener noreferrer" target="_blank">Calculation Documentation</a>
  );
};

const BusinessResults = ({
    results: { futureCost },
    vars,
    colorBarGreen,
    rangeStyle,
    range,
    resultStyle
  }) => {

  const annualCost = parseInt(removeCommas(vars[1]),10);

  return (
    <div className={`wwse-results ${resultStyle}`}>
      {annualCost - futureCost > 0 ? [
        <div className="wwse-cost-bars-container" key="bars-cont">
          <div className="wwse-results-box wwse-results-box-business">
            <h3>Current Annual Healthcare Costs</h3>
          </div>
          <div className="wwse-color-bar-box">
            <div className="wwse-color-bar wwse-color-bar-current">
              <span className="wwse-color-bar-text">${addCommas(annualCost)}</span>
            </div>
          </div>
          <div className="wwse-results-box wwse-results-box-business">
            <h3>Projected Annual Healthcare Costs</h3>
          </div>
          <div className="wwse-color-bar-box">
            <div style={colorBarGreen} className="wwse-color-bar wwse-color-bar-projected">
              <span className="wwse-color-bar-text wwse-color-bar-text-projected">${addCommas(futureCost)}</span>
            </div>
          </div>
        </div>
  ] :[
      <div key="no-savings" className="wwse-results-box wwse-results-box-business">
		      <h3>Your Benefit</h3>
	    </div>,
	    <div key="message-box" className="wwse-message-box wwse-message-box-business">
		    <p>Universal Healthcare means high quality, comprehensive coverage (including vision and dental) for every employee, regardless of number of hours worked. A healthy work force is a more productive work force.</p>
	    </div>
  ]
		}

      <div className="wwse-percentages">
        <div className="wwse-row">
          <p>
            Employees Covered<br />Under Current System
          </p>
          <p>
            Employees Covered<br />Under I-1600
          </p>
        </div>
        <div className="wwse-row">
          <div className="wwse-col">
            <span
              style={rangeStyle}
              className="wwse-percentage wwse-result-percentage"
            >
              {range}%
            </span>
          </div>
          <div className="wwse-col">
            <span className="wwse-percentage wwse-percentage-i1600 wwse-result-percentage">100%</span>
          </div>
        </div>
      </div>
      {annualCost - futureCost > 0 ? (
        <div className="wwse-col wwse-col-savings">
          <h2 className="wwse-results-business-heading">Total Projected Savings</h2>
          <span className="wwse-results-business-sub-heading">
            While Covering All Employees
          </span>
          <span className="wwse-results-business-total">
            <em>${addCommas(annualCost - futureCost)}</em>/year <sup>*</sup>
          </span>
          <div className="wwse-results-disclaimer">
            <span>
              <em>
                <sup>*</sup> Results vary based on company size and individual differences in Gross&nbsp;Pay
              </em>
            </span>
          </div>
          <CalculationDocs/>
        </div>
      ) : (
        <div className="wwse-col wwse-col-savings">
          <h2 className="wwse-results-business-heading">Total Contribution</h2>
          <span className="wwse-results-business-sub-heading">
            (To Cover All Employees)
          </span>
          <span className="wwse-results-business-total wwse-results-business-total-no-savings">
            <em>${addCommas(parseInt(futureCost / 12, 10))}</em>/month <sup>*</sup>
          </span>
          <span className="wwse-results-total-year">
            (${addCommas(futureCost)}/year)
          </span>
          <div className="wwse-results-disclaimer">
            <span>
              <em>
                <sup>*</sup> Results vary based on company size and individual differences in Gross Pay. We're working on an enhanced tool that takes those variables into account and displays an even more accurate result. Stay tuned.
              </em>
            </span>
          </div>
          <CalculationDocs/>
        </div>
      )}
    </div>
  );
}

export default BusinessResults;
