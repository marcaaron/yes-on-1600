import React, { Component } from 'react';

class IndividualRender extends Component {
	render(){
		return(
			<div class='social-results'>
				{this.props.savings > 0 ?
					[	<span class="social-saving"><em>Total Savings:</em></span>,
						<p class="social-amount">
							<span class="social-cost">
							<em>${this.props.savings}
							</em>
							</span>
							<span class="social-year">/yr</span>
						</p>
					] :
					[
						<span class="social-contribution"><em>Total Contribution:</em></span>,
						<p class="social-amount">
							<span class="social-cost">
							<em>${Math.floor(this.props.totalPersonalContribution / 12)}
							</em>
							</span>
							<span class="social-year">/mo</span>
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
