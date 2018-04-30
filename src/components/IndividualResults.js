import DonateButton from '../components/DonateButton'
import React, { Component } from "react";
import { addCommas } from '../helpers/helper-functions';

const CalculationDocs = () => {
  return(
    <a style={{fontSize:'0.9em', margin:'1.5em auto'}} href="https://wholewashington.nationbuilder.com/savings_estimator_individual_calculations" rel="noopener noreferrer" target="_blank">Calculation Documentation</a>
  );
};


class IndividualResults extends Component {
  render() {
    const MONTH = 12;
    if (this.props.sizeOfHousehold < 2) {
      return (
        <div className={`results ${this.props.resultStyle}`}>
					<div className="middle-box">
            <h2>Your <strong>Current</strong> Cost Per Household</h2>
          </div>
					<div className="total-box">
            <p>${addCommas(Math.floor(this.props.currentCosts))}/mo</p>
            <p>(${addCommas(this.props.currentCosts*12)}/yr)</p>
          </div>
          <div className="middle-box new-cost">
            <h2 >Your <strong>New</strong> Projected Cost Per Household</h2>
          </div>
          <div className="total-box total-new-cost">
            <p>${addCommas(Math.floor(this.props.totalPersonalContribution / MONTH))}/mo</p>
            <p>(${addCommas(this.props.totalPersonalContribution)}/yr)</p>
          </div>
          <div className="middle-box">
            <h2>PROJECTED CONTRIBUTIONS</h2>
          </div>
          <div className="contributions-box">
            <div className="contributions-row">
              <p className="contributions-row-heading"><a href="https://i1600-wholewashington.nationbuilder.com/income_tax_contribution" target="_blank" rel="noopener noreferrer">Income Tax Contribution</a></p>
              <p className="contributions-row-result">
                ${addCommas(Math.floor(this.props.income / MONTH))}/mo
              </p>
            </div>
            <div className="contributions-row">
              <p className="contributions-row-heading">
                <a href="https://i1600-wholewashington.nationbuilder.com/investment_profit_contribution" target="_blank" rel="noopener noreferrer">Investment Profit Contribution</a>
              </p>
              <p className="contributions-row-result">
                ${addCommas(Math.floor(this.props.capitalGainsContribution / MONTH))}/mo
              </p>
            </div>
            <div className="contributions-row">
              <p className="contributions-row-heading">
                <a href="https://i1600-wholewashington.nationbuilder.com/monthly_premium" target="_blank" rel="noopener noreferrer">Per Adult Monthly Premium</a><sup>*</sup>
              </p>
              <p className="contributions-row-result">
                ${addCommas(Math.floor(this.props.premium / MONTH))}/mo
              </p>
            </div>
						<p className="premium-disclaimer"><sup>*</sup> Employers may choose to pay the Monthly Premium as part of their benefits.</p>

          </div>

          {this.props.savings > 0 ? [
            <div className="middle-box new-cost" key="savings-label">
              <h2 >TOTAL SAVINGS</h2>
            </div>,
            <div className="total-box total-new-cost" key="savings-value">
                <p>${addCommas(Math.floor(this.props.savings / MONTH))}/mo</p>
                <p>(${this.props.savings}/yr)</p>
            </div>,
			<div className="message-box" key="ind-nosavings-result">
				<p><a href="https://d3n8a8pro7vhmx.cloudfront.net/wholewashington/pages/144/attachments/original/1522975117/Yes1600Credo.pdf?1522975117" rel="noopener noreferrer" target="_blank">Universal Healthcare</a> means high quality, comprehensive care (including dental and vision) for every Washington resident. It means fair and dedicated taxes are used to fund our healthcare, instead of escalating insurance costs with unpredictable out-of-pocket expenses. It means we can focus on our health and have the freedom to pursue our dreams.</p>
			</div>
			]:
			[
		       <div className="middle-box" key="ind-nosavings-title">
				 <h2>YOUR BENEFIT</h2>
			   </div>,
			   <div className="message-box" key="ind-nosavings-result">
				   <p><a href="https://d3n8a8pro7vhmx.cloudfront.net/wholewashington/pages/144/attachments/original/1522975117/Yes1600Credo.pdf?1522975117" rel="noopener noreferrer" target="_blank">Universal Healthcare</a> means high quality, comprehensive care (including dental and vision) for every Washington resident. It means fair and dedicated taxes are used to fund our healthcare, instead of escalating insurance costs with unpredictable out-of-pocket expenses. It means we can focus on our health and have the freedom to pursue our dreams.</p>
			   </div>
            ]
		  }
          <DonateButton />
          <CalculationDocs/>

        </div>
      );
    } else {
      return (
        <div className={`results ${this.props.resultStyle}`}>
					<div className="middle-box">
            <h2>Your <strong>Current</strong> Cost Per Household</h2>
          </div>
					<div className="total-box">
            <p>${addCommas(Math.floor(this.props.currentCosts))}/mo</p>
            <p>(${addCommas(this.props.currentCosts*12)}/yr)</p>
          </div>
          <div className="middle-box new-cost">
            <h2 >Your <strong>New</strong> Projected Cost Per Household</h2>
          </div>
		  <div className="total-box total-new-cost">
            <p>
              ${addCommas(
				Math.floor(
         		  (parseInt(this.props.capitalGainsContribution, 10) +
                   parseInt(this.props.income, 10) +
                   parseInt(this.props.premium, 10) *
                   parseInt(this.props.numberOfAdults, 10)) / 12
              	  ))}/mo
            </p>
            <p>
              (${addCommas(Math.floor(
                parseInt(this.props.capitalGainsContribution, 10) +
                  parseInt(this.props.income, 10) +
                  parseInt(this.props.premium, 10) *
                    parseInt(this.props.numberOfAdults, 10)
              ))}/yr)
            </p>
          </div>
          <div className="middle-box">
            <h2>PROJECTED CONTRIBUTIONS</h2>
          </div>
          <div className="contributions-box">
            <div className="contributions-row">
              <p className="contributions-row-heading"><a href="https://i1600-wholewashington.nationbuilder.com/income_tax_contribution" target="_blank" rel="noopener noreferrer">Income Tax Contribution</a></p>
              <p className="contributions-row-result">
                ${addCommas(Math.floor(this.props.income / MONTH))}/mo
              </p>
            </div>
            <div className="contributions-row">
              <p className="contributions-row-heading">
                <a href="https://i1600-wholewashington.nationbuilder.com/investment_profit_contribution" target="_blank" rel="noopener noreferrer">Investment Profit Contribution</a>
              </p>
              <p className="contributions-row-result">
                ${addCommas(Math.floor(this.props.capitalGainsContribution / MONTH))}/mo
              </p>
            </div>
            {parseInt(this.props.sizeOfHousehold, 10) -
              parseInt(this.props.numberOfAdults, 10) >
              0 && (
              <div className="contributions-row">
                <p className="contributions-row-heading">Per Child Monthly Premium</p>
                <p className="contributions-row-result">
                  FREE x{" "}
                  {parseInt(this.props.sizeOfHousehold, 10) -
                    parseInt(this.props.numberOfAdults, 10)}
                </p>
              </div>
            )}
			<div className="contributions-row">
        <p className="contributions-row-heading">
          <a href="https://i1600-wholewashington.nationbuilder.com/monthly_premium" target="_blank" rel="noopener noreferrer">Per Adult Monthly Premium</a><sup>*</sup>
        </p>
        <p className="contributions-row-result">
                ${addCommas(Math.floor(this.props.premium / MONTH))}/mo x{" "}
                {this.props.numberOfAdults}
        </p>
      </div>
				<p className="premium-disclaimer"><sup>*</sup> Employers may choose to pay the Monthly Premium as part of their benefits.</p>
      </div>
          {
            this.props.savings > 0 ? [
              <div className="middle-box new-cost" key="ind-savings-title">
                <h2>TOTAL SAVINGS</h2>
              </div>,
              <div className="total-box total-new-cost" key="ind-savings-result">
                <p>${addCommas(Math.floor(this.props.savings / MONTH))}/mo</p>
                <p>(${this.props.savings}/yr)</p>
			</div>,
			<div className="message-box" key="ind-nosavings-result">
				<p><a href="https://d3n8a8pro7vhmx.cloudfront.net/wholewashington/pages/144/attachments/original/1522975117/Yes1600Credo.pdf?1522975117" target="_blank" rel="noopener noreferrer">Universal Healthcare</a> means high quality, comprehensive care (including dental and vision) for every Washington resident. It means fair and dedicated taxes are used to fund our healthcare, instead of escalating insurance costs with unpredictable out-of-pocket expenses. It means we can focus on our health and have the freedom to pursue our dreams.</p>
			</div>
            ] : [
              <div className="middle-box" key="ind-nosavings-title">
                <h2>YOUR BENEFIT</h2>
              </div>,
              <div className="message-box" key="ind-nosavings-result">
				  <p><a href="https://d3n8a8pro7vhmx.cloudfront.net/wholewashington/pages/144/attachments/original/1522975117/Yes1600Credo.pdf?1522975117" target="_blank" rel="noopener noreferrer">Universal Healthcare</a> means high quality, comprehensive care (including dental and vision) for every Washington resident. It means fair and dedicated taxes are used to fund our healthcare, instead of escalating insurance costs with unpredictable out-of-pocket expenses. It means we can focus on our health and have the freedom to pursue our dreams.</p>
              </div>
            ]
          }
          <DonateButton />
          <CalculationDocs/>
        </div>
      );
    }
  }
}
export default IndividualResults;
