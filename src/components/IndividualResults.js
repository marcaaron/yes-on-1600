import Socials from "../components/Socials";
import DonateButton from '../components/DonateButton'
import React, { Component } from "react";

class IndividualResults extends Component {
  render() {
    const MONTH = 12;
    if (this.props.sizeOfHousehold < 2) {
      return (
        <div className={`results ${this.props.resultStyle}`}>
          <div className="middle-box">
            <h2>Your <strong>New</strong> Projected Cost Per Household</h2>
          </div>
          <div className="total-box">
            <p>${Math.floor(this.props.totalPersonalContribution / MONTH)}/mo</p>
            <p>(${this.props.totalPersonalContribution}/yr)</p>
          </div>
          <div className="middle-box">
            <h2>PROJECTED CONTRIBUTIONS</h2>
          </div>
          <div className="contributions-box">
            <div className="contributions-row">
              <p className="contributions-row-heading">Income Contribution</p>
              <p className="contributions-row-result">
                ${Math.floor(this.props.income / MONTH)}/mo
              </p>
            </div>
            <div className="contributions-row">
              <p className="contributions-row-heading">
                Investment Profit Contribution
              </p>
              <p className="contributions-row-result">
                ${Math.floor(this.props.capitalGainsContribution / MONTH)}/mo
              </p>
            </div>
            <div className="contributions-row">
              <p className="contributions-row-heading">
                Individual Premium
              </p>
              <p className="contributions-row-result">
                ${Math.floor(this.props.premium / MONTH)}/mo
              </p>
            </div>
          </div>

          {this.props.savings > 0 && [
            <div className="middle-box" key="savings-label">
              <h2>TOTAL SAVINGS</h2>
            </div>,
            <div className="total-box" key="savings-value">
              <p>${this.props.savings}/yr</p>
            </div>
          ]}
          {/* <p className="results-disclaimer"><em>* This calculator assumes that an individual or household is responsible for 100% of their premium contribution. Actual costs will be less if some or all of that contribution is covered via employee benefits.</em></p> */}
          <Socials
            killClass={this.props.killClass}
            savings={this.props.savings}
            imageURL={this.props.imageURL}
            size="40"
          />

          <DonateButton />

        </div>
      );
    } else {
      return (
        <div className={`results ${this.props.resultStyle}`}>
          <div className="header-box">
            <h1>Calculator Results:</h1>
          </div>
          <div className="middle-box">
            <h2>CURRENT COSTS</h2>
          </div>
          <div className="total-box">
            <p>${this.props.currentCosts}/mo</p>
            <p>(${parseInt(this.props.currentCosts * MONTH, 10)}/yr)</p>
          </div>
          <div className="middle-box">
            <h2>PROJECTED CONTRIBUTIONS</h2>
          </div>
          <div className="contributions-box">
            <div className="contributions-row">
              <p className="contributions-row-heading">Income Contribution</p>
              <p className="contributions-row-result">
                ${Math.floor(this.props.income / MONTH)}/mo
              </p>
            </div>
            <div className="contributions-row">
              <p className="contributions-row-heading">
                Investment Profit Contribution
              </p>
              <p className="contributions-row-result">
                ${Math.floor(this.props.capitalGainsContribution / MONTH)}/mo
              </p>
            </div>
            <div className="contributions-row">
              <p className="contributions-row-heading">
                Per Adult Premium
              </p>
              <p className="contributions-row-result">
                ${Math.floor(this.props.premium / MONTH)}/mo x{" "}
                {this.props.numberOfAdults}
              </p>
            </div>
            {parseInt(this.props.sizeOfHousehold, 10) -
              parseInt(this.props.numberOfAdults, 10) >
              0 && (
              <div className="contributions-row">
                <p className="contributions-row-heading">Per Child Premium</p>
                <p className="contributions-row-result">
                  $0/mo x{" "}
                  {parseInt(this.props.sizeOfHousehold, 10) -
                    parseInt(this.props.numberOfAdults, 10)}
                </p>
              </div>
            )}
          </div>
          <div className="middle-box">
            <h2>TOTAL PROJECTED COSTS PER HOUSEHOLD</h2>
          </div>
          <div className="total-box">
            <p>
              ${Math.floor(
                (parseInt(this.props.capitalGainsContribution, 10) +
                  parseInt(this.props.income, 10) +
                  parseInt(this.props.premium, 10) *
                    parseInt(this.props.numberOfAdults, 10)) /
                  12
              )}/mo
            </p>
            <p>
              (${Math.floor(
                parseInt(this.props.capitalGainsContribution, 10) +
                  parseInt(this.props.income, 10) +
                  parseInt(this.props.premium, 10) *
                    parseInt(this.props.numberOfAdults, 10)
              )}/yr)
            </p>
          </div>
          {
            this.props.savings > 0 ? [
              <div className="middle-box" key="ind-savings-title">
                <h2>Your Benefit</h2>
              </div>,
              <div className="total-box" key="ind-savings-result">
                <p>${Math.floor(this.props.savings / MONTH)}/mo</p>
                <p>(${this.props.savings}/yr)</p>
              </div>
            ] : [
              <div className="middle-box" key="ind-nosavings-title">
                <h2>Your Result</h2>
              </div>,
              <div className="total-box" key="ind-nosavings-result">
                <p>Congratulations</p>
                <p>Due to your household's AGI.</p>
              </div>
            ] 
          }
          {/* <p className="results-disclaimer"><em>* This calculator assumes that an individual or household is responsible for 100% of their premium contribution. Actual costs will be less if some or all of that contribution is covered via employee benefits.</em></p> */}
          <Socials
            killClass={this.props.killClass}
            savings={this.props.savings}
            imageURL={this.props.imageURL}
            size="40"
          />

          <DonateButton />
        </div>
      );
    }
  }
}
export default IndividualResults;
