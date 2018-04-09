import DonateButton from '../components/DonateButton'
import React, { Component } from "react";
import { addCommas } from '../helpers/helper-functions';

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
          <div className="middle-box">
            <h2>Your <strong>New</strong> Projected Cost Per Household</h2>
          </div>
          <div className="total-box">
            <p>${addCommas(Math.floor(this.props.totalPersonalContribution / MONTH))}/mo</p>
            <p>(${addCommas(this.props.totalPersonalContribution)}/yr)</p>
          </div>
          <div className="middle-box">
            <h2>PROJECTED CONTRIBUTIONS</h2>
          </div>
          <div className="contributions-box">
            <div className="contributions-row">
              <p className="contributions-row-heading">Income Contribution</p>
              <p className="contributions-row-result">
                ${addCommas(Math.floor(this.props.income / MONTH))}/mo
              </p>
            </div>
            <div className="contributions-row">
              <p className="contributions-row-heading">
                Investment Profit Contribution
              </p>
              <p className="contributions-row-result">
                ${addCommas(Math.floor(this.props.capitalGainsContribution / MONTH))}/mo
              </p>
            </div>
            <div className="contributions-row">
              <p className="contributions-row-heading">
                Individual Premium<sup>*</sup>
              </p>
              <p className="contributions-row-result">
                ${addCommas(Math.floor(this.props.premium / MONTH))}/mo
              </p>
            </div>
						<p className="premium-disclaimer"><sup>*</sup> See <a href="https://i1600-wholewashington.nationbuilder.com/monthly_premium">Monthly Premium</a> for more info. Employers may choose to pay the Premium as part of their benefits.</p>

          </div>

          {this.props.savings > 0 ? [
            <div className="middle-box" key="savings-label">
              <h2>TOTAL SAVINGS</h2>
            </div>,
            <div className="total-box" key="savings-value">
                <p>${addCommas(Math.floor(this.props.savings / MONTH))}/mo</p>
                <p>(${this.props.savings}/yr)</p>
            </div>,
			<div className="message-box" key="ind-nosavings-result">
				<p>Universal Healthcare means the freedom to pursue dreams, the security of zero to minimal out-of-pocket costs, your choice of provider, and high quality, comprehensive benefits (dental and vision) for every Washingon resident.</p>
			</div>
			]:
			[
		       <div className="middle-box" key="ind-nosavings-title">
				 <h2>YOUR BENEFIT</h2>
			   </div>,
			   <div className="message-box" key="ind-nosavings-result">
				   <p>Universal Healthcare means the freedom to pursue dreams, the security of zero to minimal out-of-pocket costs, your choice of provider, and high quality, comprehensive benefits (dental and vision) for every Washingon resident.</p>
			   </div>
            ]
		  }
          <DonateButton />

        </div>
      );
    } else {
      return (
        <div className={`results ${this.props.resultStyle}`}>
          <div className="middle-box">
            <h2>Your <strong>New</strong> Projected Cost Per Household</h2>
          </div>
		  <div className="total-box">
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
              <p className="contributions-row-heading">Income Contribution</p>
              <p className="contributions-row-result">
                ${addCommas(Math.floor(this.props.income / MONTH))}/mo
              </p>
            </div>
            <div className="contributions-row">
              <p className="contributions-row-heading">
                Investment Profit Contribution
              </p>
              <p className="contributions-row-result">
                ${addCommas(Math.floor(this.props.capitalGainsContribution / MONTH))}/mo
              </p>
            </div>
            {parseInt(this.props.sizeOfHousehold, 10) -
              parseInt(this.props.numberOfAdults, 10) >
              0 && (
              <div className="contributions-row">
                <p className="contributions-row-heading">Per Child Premium</p>
                <p className="contributions-row-result">
                  FREE x{" "}
                  {parseInt(this.props.sizeOfHousehold, 10) -
                    parseInt(this.props.numberOfAdults, 10)}
                </p>
              </div>
            )}
			<div className="contributions-row">
        <p className="contributions-row-heading">
          Per Adult Premium <sup>*</sup>
        </p>
        <p className="contributions-row-result">
                ${addCommas(Math.floor(this.props.premium / MONTH))}/mo x{" "}
                {this.props.numberOfAdults}
        </p>
      </div>
				<p className="premium-disclaimer"><sup>*</sup> See <a href="https://i1600-wholewashington.nationbuilder.com/monthly_premium">Monthly Premium</a> for more info. Employers may choose to pay the Premium as part of their benefits.</p>
      </div>
          {
            this.props.savings > 0 ? [
              <div className="middle-box" key="ind-savings-title">
                <h2>TOTAL SAVINGS</h2>
              </div>,
              <div className="total-box" key="ind-savings-result">
                <p>${addCommas(Math.floor(this.props.savings / MONTH))}/mo</p>
                <p>(${this.props.savings}/yr)</p>
			</div>,
			<div className="message-box" key="ind-nosavings-result">
				<p>Universal Healthcare means the freedom to pursue dreams, the security of zero to minimal out-of-pocket costs, your choice of provider, and high quality, comprehensive benefits (dental and vision) for every Washingon resident.</p>
			</div>
            ] : [
              <div className="middle-box" key="ind-nosavings-title">
                <h2>YOUR BENEFIT</h2>
              </div>,
              <div className="message-box" key="ind-nosavings-result">
				  <p>Universal Healthcare means the freedom to pursue dreams, the security of zero to minimal out-of-pocket costs, your choice of provider, and high quality, comprehensive benefits (dental and vision) for every Washingon resident.</p>
              </div>
            ]
          }
          <DonateButton />
        </div>
      );
    }
  }
}
export default IndividualResults;
