import React, { Component } from 'react';
import {businessCalc} from '../helpers/business-calc';
import {individualCalc} from '../helpers/individual-calc';
import Socials from '../components/Socials';

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
						<div className="header-box">
							<h1>Calculator Results:</h1>
						</div>
						<div className="middle-box">
							<h2>Current Annual Healthcare Costs:</h2>
						</div>
						<div className='color-bar red'>
							<span className='color-bar-text'>${this.props.vars[1]}</span>
						</div>
						<div className="middle-box">
							<h2>Projected Annual Healthcare Costs:</h2>
						</div>
						<div className="color-bar-box">
							<div style={colorBarGreen} className='color-bar green'><span className='color-bar-text'>${this.state.futureCost}</span></div>
						</div>
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
						<div className="col white">
							<h2 className="results-heading">Total Annual Savings:</h2>
							<span className="results-total">${this.props.vars[1] - this.state.futureCost}</span>
						</div>
						<Socials size="40"/>
					</div>
				</div>
			);
		} else {
			return (
			// Individual Results
				<div className='card'>
					<div className="results">
						<div className="header-box">
							<h1>Calculator Results:</h1>
						</div>
						<div className="middle-box">
							<h2>CONTRIBUTIONS</h2>
						</div>
						<div className="contributions-box">
							<div className="contributions-row">
								<p className='contributions-row-heading'>WA State Personal Health Assessment</p>
								<p className="contributions-row-result">${Math.floor(this.state.income / 12)}/mo</p>
							</div>
							<div className="contributions-row">
								<p className='contributions-row-heading'>Capital Gains Tax</p>
								<p className="contributions-row-result">${Math.floor(this.state.capGains / 12)}/mo</p>
							</div>
							<div className="contributions-row">
								<p className='contributions-row-heading'>Premium</p>
								<p className="contributions-row-result">${Math.floor(this.state.premium / 12)}/mo</p>
							</div>
						</div>
						<div className="middle-box">
							<h2>TOTAL</h2>
						</div>
						<div className="total-box">
							<p>${Math.floor(this.state.totalPersonalContribution / 12)}/mo</p>
							<p>(${this.state.totalPersonalContribution}/yr)</p>
						</div>
						<Socials size="40"/>
					</div>
				</div>
			);
		}
	}
};

export default Results;
