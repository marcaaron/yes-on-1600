import React, { Component } from 'react';

class Results extends Component {
	constructor(props) {
		super(props);
		this.state = {
			futureCost: 0,
			fpl200: 0,
			income: 0,
			capGains: 0,
			premium: 0,
			totalPersonalContribution: 0,
			payroll: 0,
		}
		this.getResult = this.getResult.bind(this);
	}
	componentWillMount() {
		this.getResult();
	}

	getResult() {
		if (this.props.userType === 'business') {
			let newPercentage = 0;
			switch (this.props.vars[2]) {
				case '<10':
					newPercentage = 0.0641;
					break;
				case '10-24':
					newPercentage = 0.0499;
					break;
				case '25-99':
					newPercentage = 0.0565;
					break;
				case '100-999':
					newPercentage = 0.055;
					break;
				case '>1000':
					newPercentage = 0.0613;
					break;
				default:
					newPercentage = 0;
			}

			const futureCost = parseInt((this.props.vars[0] * newPercentage), 10);
			this.setState({ futureCost });

		} else {

			const prem = 134,
				fpl1808 = 4320,
				fpl18 = [0,
					12140,
					16460,
					20780,
					25100,
					29420,
					33740,
					38060,
					42380
				];
			let
				premium = 0,
				payroll = 0,
				income = 0,
				capGains = 0,
				grossIncome = this.props.vars[0],
				capitalGains = this.props.vars[1],
				sizeOfHousehold = this.props.vars[2],
				numberOfAdults = parseInt(this.props.vars[3], 10);

			function calc200fpl(size) {
				if (size > 8) {
					let extra = size - 8;
					extra *= fpl1808;
					return (fpl18[8] + extra) * 2;
				} else {
					return fpl18[size] * 2;
				}
			}

			if (numberOfAdults > sizeOfHousehold) {
				numberOfAdults = sizeOfHousehold
			};
			if (grossIncome === '') {
				grossIncome = 0;
			};
			if (capitalGains === '') {
				capitalGains = 0;
			}
			grossIncome = parseInt(grossIncome, 10);
			capitalGains = parseInt(capitalGains, 10);

			const totalIncome = grossIncome + capitalGains;
			const fpl200 = calc200fpl(sizeOfHousehold);

			if (fpl200 < totalIncome) {
				premium = prem * numberOfAdults * 12;
			}

			if (grossIncome < 15000) {
				let phaseOut = parseInt((15000 - grossIncome), 10) * 0.25;
				payroll = (grossIncome - phaseOut) * 0.085;
			} else if (grossIncome >= 15000 && grossIncome < 60000) {
				let phaseOut = (15000 - grossIncome) * 0.25;
				income = (grossIncome - 15000) * 0.01;
				payroll = (grossIncome - phaseOut) * 0.085;
			} else if (grossIncome >= 60000) {
				income = (grossIncome - 15000) * 0.01;
				payroll = (grossIncome - 15000) * 0.085;
			}

			// Caclculate Capital Gains  - (capGains)
			capitalGains = parseInt(capitalGains, 10);

			if (capitalGains < 15000) {
				capGains = 0;
			} else if (capitalGains >= 15000 && capitalGains < 60000) {
				let ltcg = 15000 - (parseInt((capitalGains * 0.25), 10));
				capGains = parseInt((capitalGains - ltcg) * 0.085, 10);
			} else if (capitalGains >= 60000) {
				capGains = capitalGains * 0.085;
			}

			const totalPersonalContribution = income + capGains + premium;
			payroll = parseInt(payroll, 10);

			this.setState({ fpl200, income, capGains, premium, totalPersonalContribution, payroll });
		}
	}

	render() {
		if (this.props.userType === 'business') {
			const colorBarGreen = { width: `${parseInt((this.state.futureCost / this.props.vars[1]) * 100, 10) + 10}%` };
			let rangeStyle = {
				fontSize: `${1 + this.props.range / 100}em`,
				width: `${1}em`,
				height: `${1}em`
			};
			return (
				// Business Results
				<div className="card">
					<div className="results">
						<h1>My I-1600 Cost Calculator Results:</h1>
						<p className="results-heading">Current Annual Healthcare Costs:</p>
						<div className='color-bar red'>
							<span className='color-bar-text'>${this.props.vars[1]}</span>
						</div>
						<p className="results-heading">Projected Annual Healthcare Costs:</p>
						<div style={colorBarGreen} className='color-bar green'><span className='color-bar-text'>${this.state.futureCost}</span></div>
						<div className="percentages">
							<div className="row">
								<p>Employees Covered<br />Under Current System</p>
								<p>Employees Covered<br />Under I-1600</p>
							</div>
							<div className="row">
								<div className="col">
									<span style={rangeStyle} className="percentage result-percentage">{this.props.range}%</span>
								</div>
								<div className="col">
									<span className="percentage result-percentage">100%</span>
								</div>
							</div>
						</div>
						<div className="col">
							<span className="results-heading">Total Annual Savings:</span>
							<span className="results-total">${this.props.vars[1] - this.state.futureCost}</span>
						</div>
					</div>
				</div>
			);
		} else {
			return (
			// Individual Results
				<div className='card'>
					<div className="results">
						<h1>My I-1600 Cost Calculator Results:</h1>
						<p className='results-heading'>Income Tax Contribution:</p>
						<p className='results-numbers'>
							${this.state.income}/yr or ${Math.floor(this.state.income / 12)}/mo
						</p>
						<p className='results-heading'>Capitol Gains Tax Contribution</p>
						<p className='results-numbers'>
							${this.state.capGains}/yr or ${Math.floor(this.state.capGains / 12)}/mo
						</p>
						<p className='results-heading'>Premium Contribution</p>
						<p className='results-numbers'>
							${this.state.premium}/yr or ${Math.floor(this.state.premium / 12)}/mo
							</p>
						<p className='results-heading'>Total Contribution</p>
						<p className='results-numbers'>
							${this.state.totalPersonalContribution}/yr or ${Math.floor(this.state.totalPersonalContribution / 12)}/mo
						</p>
						<p className='results-heading'>Employer Contribution</p>
						<p className='results-numbers'>
							${this.state.payroll}/yr or ${Math.floor(this.state.payroll / 12)}/mo
						</p>
					</div>
				</div>
			);
		}
	}
};

export default Results;
