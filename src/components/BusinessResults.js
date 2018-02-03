import Socials from '../components/Socials';
import React, { Component } from 'react';

class BusinessResults extends Component {
	render(){
		return(
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
					<div style={this.props.colorBarGreen} className='color-bar green'><span className='color-bar-text'>${this.props.futureCost}</span></div>
				</div>
				<div className="percentages">
					<div className="row">
						<p>Employees Covered<br />Under Current System</p>
						<p>Employees Covered<br />Under I-1600</p>
					</div>
					<div className="row">
						<div className="col">
							<span style={this.props.rangeStyle} className="percentage result-percentage">{this.props.range}%</span>
						</div>
						<div className="col">
							<span className="percentage result-percentage">100%</span>
						</div>
					</div>
				</div>
				<div className="col white">
					<h2 className="results-heading">Total Annual Savings:</h2>
					<span className="results-total">${this.props.vars[1] - this.props.futureCost}</span>
				</div>
				<Socials size="40"/>
			</div>
		);
	}
}
export default BusinessResults;
