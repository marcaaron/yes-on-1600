import html2canvas from 'html2canvas';
import BusinessResults from './BusinessResults';
import IndividualResults from './IndividualResults';

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
	componentDidMount(){
		html2canvas(document.querySelector('.social-render'),{
			width:'1200',
			height:'630',
		})
		.then(function(canvas) {
		document.querySelector('.social-render').remove();
		console.log((canvas).toDataURL('image/png'));
});
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
				<div>
					<div className="card">
						<BusinessResults
							colorBarGreen={colorBarGreen}
							rangeStyle={rangeStyle}
							vars={this.props.vars}
							futureCost={this.state.futureCost}
							range={this.props.range}
						/>
					</div>
					{/* Hidden Render >> html2canvas >> base64 image string */}
					<div className="social-render">
						<BusinessResults
							colorBarGreen={colorBarGreen}
							rangeStyle={rangeStyle}
							vars={this.props.vars}
							futureCost={this.state.futureCost}
							range={this.props.range}
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
						income={this.state.income}
						capGains={this.state.capGains}
						premium={this.state.premium}
						totalPersonalContribution={this.state.totalPersonalContribution}
					/>
				</div>
				{/* Hidden Render >> html2canvas >> base64 image string */}
				<div className="social-render">
					<IndividualResults
						income={this.state.income}
						capGains={this.state.capGains}
						premium={this.state.premium}
						totalPersonalContribution={this.state.totalPersonalContribution}
					/>
				</div>
			</div>
			);
		}
	}
};

export default Results;
