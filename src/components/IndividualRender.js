import React, { Component } from 'react';

class IndividualRender extends Component {
	render(){
		return(
			<div className='social-results'>
				{this.props.savings > 0 ?
					[	<span className="social-saving"><em>Total Savings:</em></span>,
						<p className="social-amount">
							<span className="social-cost">
							<em>${this.props.savings}
							</em>
							</span>
							<span className="social-year">/yr</span>
						</p>
					] :
					[
						<span className="social-contribution"><em>Total Contribution:</em></span>,
						<p className="social-amount">
							<span className="social-cost">
							<em>${Math.floor(this.props.totalPersonalContribution / 12)}
							</em>
							</span>
							<span className="social-year">/mo</span>
						</p>
					]
				}
				<div className="employees-covered-block">
					<span className="social-yes">YES on 1600</span>
					<span className="social-universal">UNIVERSAL</span>
					<span className="social-healthcare"> HEALTHCARE</span>
				</div>
			</div>
		);
	}
}
export default IndividualRender;
