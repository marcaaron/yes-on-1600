import React, { Component } from 'react';
import BusinessResults from './BusinessResults';
import IndividualResults from './IndividualResults';
import {businessCalc} from '../helpers/business-calc';
import {individualCalc} from '../helpers/individual-calc';
import { removeCommas, rmDecAndRound } from '../helpers/helper-functions';

class Results extends Component {
	constructor(props) {
		super(props);
		this.state = {
			futureCost: 0,
			income: 0,
			capitalGainsContribution: 0,
			premium: 0,
			savings: 0,
			totalPersonalContribution: 0,
			currentCosts:0
		}
	}
	componentWillMount() {
		this.getResult();
	}

	getResult = () => {
		if (this.props.userType === 'business') {
			let futureCost = businessCalc(rmDecAndRound(this.props.vars[2]), rmDecAndRound(this.props.vars[0]));
			this.setState({ futureCost });
		}
		 else {
			  const state = individualCalc(
        rmDecAndRound(this.props.vars[0]),
        rmDecAndRound(this.props.vars[1]),
        rmDecAndRound(this.props.vars[2]),
        rmDecAndRound(this.props.vars[3]),
        rmDecAndRound(this.props.vars[4]),
        rmDecAndRound(this.props.vars[5])
      );
			this.setState(state);
		}
	}

	render() {
    const { userType, vars, range } = this.props;
    const { futureCost, income, capitalGainsContribution, premium, totalPersonalContribution, currentCosts, savings, sizeOfHousehold, numberOfAdults, currentPremiums, currentAdditionalMedical } = this.state;

		if (userType === 'business') {
			const colorBarGreen = { width: `${parseInt((futureCost / removeCommas(vars[1])) * 100, 10) + 10}%` };
			let rangeStyle = {
				fontSize: `${1 + range / 100}em`,
				width: `${1}em`,
				height: `${1}em`
			};
			return (
				// Business Results
				<div>
					<div className="card">
						<BusinessResults
							colorBarGreen={colorBarGreen}
							rangeStyle={rangeStyle}
							vars={vars}
							futureCost={futureCost}
							range={range}
						/>
					</div>
				</div>
			);
		} else {
			return (
			// Individual Results
			<div>
				<div className='card'>
					<IndividualResults
						income={income}
						capitalGainsContribution={capitalGainsContribution}
						premium={premium}
						totalPersonalContribution={totalPersonalContribution}
						currentCosts={currentCosts}
						savings={savings}
						sizeOfHousehold={sizeOfHousehold}
						numberOfAdults={numberOfAdults}
						currentPremiums={currentPremiums}
						currentAdditionalMedical={currentAdditionalMedical}
					/>
				</div>
				<a
					className="feedback" href="https://docs.google.com/forms/d/e/1FAIpQLSeyFQ25YNFZdl2gLziNH8c5iQRBycnS4WuXFciTESLgMoDRig/viewform"
					target="_blank"
					rel="noopener noreferrer"
				>
						<span>We'd love some feedback.</span>
						<span>Click here to let us know your thoughts on Universal Healthcare.</span>
				</a>
			</div>
			);
		}
	}
};

export default Results;
