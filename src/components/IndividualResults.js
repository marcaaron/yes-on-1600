import React from "react";
import { addCommas } from '../helpers/helper-functions';
import MessageBox from './MessageBox';
import ContributionsRow from './ContributionsRow';

const CalculationDocs = () => {
  return(
    <a style={{fontSize:'0.9em', margin:'1.5em auto'}} href="https://wholewashington.nationbuilder.com/savings_estimator_individual_calculations" rel="noopener noreferrer" target="_blank">Calculation Documentation</a>
  );
};

const IndividualResults = ({
  results: {
    sizeOfHousehold,
    currentCosts,
    totalPersonalContribution,
    income,
    capitalGainsContribution,
    premium,
    savings,
    numberOfAdults
  }}) => {

  const MONTH = 12;
  return(
    <div className="wwse-results">

      <div className="wwse-results-box">
        <div className="wwse-results-header">
          <h3>Your <strong>Current</strong> Cost</h3>
        </div>

        <div className="wwse-results-total">
          <p className="wwse-results-total-top wwse-results-total-current">
            ${addCommas(Math.floor(currentCosts))}/mo
          </p>
          <p className="wwse-results-total-bottom">
            (${addCommas(currentCosts*12)}/yr)
          </p>
        </div>
      </div>

      <div className="wwse-results-box wwse-results-box-new">
        <div className="wwse-results-header wwse-results-header-new">
          <h3><strong>New</strong> Projected Cost</h3>
        </div>

        <div className="wwse-results-total wwse-results-total-new">
          <p className="wwse-results-total-top wwse-results-total-projected">
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
          <p className="wwse-results-total-bottom">
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
      </div>

      <div className="wwse-results-total-box">
        <div className="wwse-results-header wwse-results-header-contributions">
          <h3>PROJECTED CONTRIBUTIONS</h3>
        </div>
        <div className="wwse-results-contributions-container">

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
            <div className="wwse-contributions-row">
              <p className="wwse-contributions-row-heading">Per Child Monthly Premium</p>
              <p className="wwse-contributions-row-result">
                FREE x{" "}
                {parseInt(sizeOfHousehold, 10) -
                  parseInt(numberOfAdults, 10)}
                </p>
              </div>
            )
          }

            <div className="wwse-contributions-row">
              <p className="wwse-contributions-row-heading">
                <a href="https://i1600-wholewashington.nationbuilder.com/monthly_premium" target="_blank" rel="noopener noreferrer">Per Adult Monthly Premium</a><sup>*</sup>
              </p>
              <p className="wwse-contributions-row-result">
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
            <p className="wwse-premium-disclaimer">
              <sup>*</sup> Employers may choose to pay the Monthly Premium as part of their benefits.
            </p>
          </div>
        </div>
        <div className="wwse-results-total-box wwse-results-box-new">
          <div
            className={`wwse-results-header wwse-results-header-new ${savings > 0 ? 'new-cost' :''}`}
            key="savings-label"
          >
            <h3>
              {savings > 0 ? 'TOTAL SAVINGS' : 'YOUR BENEFIT'}
            </h3>
          </div>
          {savings > 0 ?
          <div className="wwse-results-total" key="savings-value">
            <p className="wwse-results-total-top wwse-results-total-total">
              ${addCommas(Math.floor(savings / MONTH))}/mo</p>
            <p className="wwse-results-total-bottom">(${savings}/yr)</p>
          </div> : ''
          }
        </div>

      <MessageBox key="ind-nosavings-result"/>
      <CalculationDocs/>
    </div>
  )
}
export default IndividualResults;
