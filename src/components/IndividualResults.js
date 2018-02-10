import Socials from '../components/Socials';
import React, { Component } from 'react';

class IndividualResults extends Component {
	render(){
		return(
			<div className="results">
				<div className="header-box">
					<h1>Calculator Results:</h1>
				</div>
				<div className="middle-box">
					<h2>CURRENT COSTS</h2>
				</div>
				<div className="total-box">
					<p>${this.props.currentPremium}/mo</p>
					<p>(${parseInt(this.props.currentPremium*12,10)}/yr)</p>
				</div>
				<div className="middle-box">
					<h2>CONTRIBUTIONS</h2>
				</div>
				<div className="contributions-box">
					<div className="contributions-row">
						<p className='contributions-row-heading'>WA State Personal Health Assessment</p>
						<p className="contributions-row-result">${Math.floor(this.props.income / 12)}/mo</p>
					</div>
					<div className="contributions-row">
						<p className='contributions-row-heading'>Capital Gains Tax</p>
						<p className="contributions-row-result">${Math.floor(this.props.capitalGainsContribution / 12)}/mo</p>
					</div>
					<div className="contributions-row">
						<p className='contributions-row-heading'>Premium</p>
						<p className="contributions-row-result">${Math.floor(this.props.premium / 12)}/mo</p>
					</div>
				</div>
				<div className="middle-box">
					<h2>TOTAL PROJECTED COSTS</h2>
				</div>
				<div className="total-box">
					<p>${Math.floor(this.props.totalPersonalContribution / 12)}/mo</p>
					<p>(${this.props.totalPersonalContribution}/yr)</p>
				</div>
				<Socials size="40"/>
			</div>
		);
	}
}
export default IndividualResults;
