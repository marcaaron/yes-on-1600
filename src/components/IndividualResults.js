import DonateButton from './DonateButton';
import React, { Component } from "react";
import { addCommas } from '../helpers/helper-functions';
import MessageBox from './MessageBox';
import ContributionsRow from './ContributionsRow';

const CalculationDocs = () => {
  return(
    <a style={{fontSize:'0.9em', margin:'1.5em auto'}} href="https://wholewashington.nationbuilder.com/savings_estimator_individual_calculations" rel="noopener noreferrer" target="_blank">Calculation Documentation</a>
  );
};

class IndividualResults extends Component {
  render() {
    const MONTH = 12;
    const { sizeOfHousehold, currentCosts, totalPersonalContribution, income, capitalGainsContribution, premium, savings, numberOfAdults } = this.props;
    return(
      <div className="results">

        <div className="middle-box">
          <h2>Your <strong>Current</strong> Cost Per Household</h2>
        </div>

        <div className="total-box">
          <p>${addCommas(Math.floor(currentCosts))}/mo</p>
          <p>(${addCommas(currentCosts*12)}/yr)</p>
        </div>

        <div className="middle-box new-cost">
          <h2 >Your <strong>New</strong> Projected Cost Per Household</h2>
        </div>

        <div className="total-box total-new-cost">
          <p>
            $
            { sizeOfHousehold < 2 ?
              addCommas(Math.floor(totalPersonalContribution / MONTH))
              :
              addCommas(Math.floor(
                (parseInt(capitalGainsContribution, 10) +
                parseInt(income, 10) +
                parseInt(premium, 10) *
                parseInt(numberOfAdults, 10)) / 12
              ))
            }
            /mo
          </p>
          <p>
            ($
              { sizeOfHousehold < 2 ?
                addCommas(totalPersonalContribution)
                :
                addCommas(Math.floor(
                  parseInt(capitalGainsContribution, 10) +
                  parseInt(income, 10) +
                  parseInt(premium, 10) *
                  parseInt(numberOfAdults, 10)
                ))
              }
              /yr)
          </p>
        </div>

        <div className="middle-box">
          <h2>PROJECTED CONTRIBUTIONS</h2>
        </div>
        <div className="contributions-box">

          <ContributionsRow
            link="https://i1600-wholewashington.nationbuilder.com/income_tax_contribution"
            title="Income Tax Contribution"
            contribution={income}
          />
          <ContributionsRow
            link="https://i1600-wholewashington.nationbuilder.com/investment_profit_contribution"
            title="Investment Profit Contribution"
            contribution={capitalGainsContribution}
          />

          {
          sizeOfHousehold > 1 &&
          parseInt(sizeOfHousehold, 10) -
          parseInt(numberOfAdults, 10) >
          0 &&
          (
            <div className="contributions-row">
              <p className="contributions-row-heading">Per Child Monthly Premium</p>
              <p className="contributions-row-result">
                FREE x{" "}
                {parseInt(sizeOfHousehold, 10) -
                  parseInt(numberOfAdults, 10)}
                </p>
              </div>
            )
          }

            <div className="contributions-row">
              <p className="contributions-row-heading">
                <a href="https://i1600-wholewashington.nationbuilder.com/monthly_premium" target="_blank" rel="noopener noreferrer">Per Adult Monthly Premium</a><sup>*</sup>
              </p>
              <p className="contributions-row-result">
                $
                {
                  addCommas(Math.floor(premium / MONTH))
                }
                /mo {
                  sizeOfHousehold > 1 &&
                  `x${numberOfAdults}`
                }
              </p>
            </div>
            <p className="premium-disclaimer">
              <sup>*</sup> Employers may choose to pay the Monthly Premium as part of their benefits.
            </p>
          </div>

          <div
            className={`middle-box ${savings > 0 ? 'new-cost' :''}`}
            key="savings-label"
          >
            <h2>
              {savings > 0 ? 'TOTAL SAVINGS' : 'YOUR BENEFIT'}
            </h2>
          </div>
          {savings > 0 ?
          <div className="total-box total-new-cost" key="savings-value">
            <p>${addCommas(Math.floor(savings / MONTH))}/mo</p>
            <p>(${savings}/yr)</p>
          </div> : ''
          }
        <MessageBox key="ind-nosavings-result"/>
        <DonateButton />
        <CalculationDocs/>
      </div>
    )
  }
}
export default IndividualResults;
