import Socials from '../components/Socials';
import React, { Component } from 'react';

class BusinessResults extends Component {
	render(){
		return(
			<div className={`results ${this.props.resultStyle}`}>
				<div className="header-box">
					<h1>Calculator Results:</h1>
				</div>
				{ (this.props.vars[1]-this.props.futureCost) > 0 &&
					[
				<div className="cost-bars-container">
					<div className="middle-box">
						<h2>Current Annual Healthcare Costs:</h2>
					</div>
					<div className="color-bar-box">
						<div className='color-bar red'>
							<span className='color-bar-text'>${this.props.vars[1]}</span>
						</div>
					</div>
					<div className="middle-box">
						<h2>Projected Annual Healthcare Costs:</h2>
					</div>
					<div className="color-bar-box">
						<div style={this.props.colorBarGreen} className='color-bar green'><span className='color-bar-text'>${this.props.futureCost}</span></div>
					</div>
				</div>
					]
				}

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
				{(this.props.vars[1]-this.props.futureCost) > 0 ?
					<div className="col white">
						<h2 className="results-heading">Total Projected Savings:</h2>
						<span className="results-sub-heading">(While Covering All Employees)</span>
						<span className="results-total">${this.props.vars[1] - this.props.futureCost}/year <sup>*</sup></span>
						<span className="results-total-year"></span>
						<div className="results-disclaimer"><span><em>Results estimated based on company size.</em></span><span><em>Please <a href="mailto:Erin@wholewashington.org?Subject=I-1600%20Healthcare%20Costs%20For%20Businesses&Body=Hi%2C%20I%27d%20like%20some%20help%20calculating%20what%20my%20projected%20costs%20will%20be%20under%20I-1600.">contact us</a> for a detailed assessment!</em></span></div>
					</div> :
					<div className="col white">
						<h2 className="results-heading">Total Contribution:</h2>
						<span className="results-sub-heading">(To Cover All Employees)</span>
						<span className="results-total">${parseInt(this.props.futureCost/12, 10)}/month <sup>*</sup></span>
						<span className="results-total-year">(${this.props.futureCost}/year)</span>
						<div className="results-disclaimer"><span><em>Results estimated based on company size.</em></span><span><em>Please <a href="mailto:Erin@wholewashington.org?Subject=I-1600%20Healthcare%20Costs%20For%20Businesses&Body=Hi%2C%20I%27d%20like%20some%20help%20calculating%20what%20my%20projected%20costs%20will%20be%20under%20I-1600.">contact us</a> for a detailed assessment!</em></span></div>

					</div>
				}
				<Socials
					imageURL={this.props.imageURL}
					size="40"
					killClass={this.props.killClass}
				/>

			</div>
		);
	}
}
export default BusinessResults;
