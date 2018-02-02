import React, { Component } from 'react';
import {businessCalc} from '../helpers/business-calc';
import {individualCalc} from '../helpers/individual-calc';

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
			let futureCost = businessCalc(this.props.vars[2], this.props.vars[0]);
			this.setState({ futureCost });
		}
		 else {
			const state = individualCalc(this.props.vars[0], this.props.vars[1], this.props.vars[2], this.props.vars[3]);
			this.setState(state);
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
