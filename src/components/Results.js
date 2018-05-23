import React, { Component } from 'react';
import BusinessResults from './BusinessResults';
import IndividualResults from './IndividualResults';
import { removeCommas, rmDecAndRound } from '../helpers/helper-functions';
import { connect } from 'react-redux';
import { getIndividualResults, getBusinessResults } from '../actions';

class Results extends Component {
	componentWillMount() {
		this.getResult();
	}

	getResult = () => {
    const { vars, userType } = this.props;
		if (userType === 'business') {
			this.props.getBusinessResults(
        rmDecAndRound(vars[2]),
        rmDecAndRound(vars[0])
      );
		}
		else {
		  this.props.getIndividualResults(
        rmDecAndRound(vars[0]),
        rmDecAndRound(vars[1]),
        rmDecAndRound(vars[2]),
        rmDecAndRound(vars[3]),
        rmDecAndRound(vars[4]),
        rmDecAndRound(vars[5])
      );
		}
	}

	render() {
    const { results, userType, vars, range } = this.props;

		if (userType === 'business') {
      if(!results.futureCost) return null;
			const colorBarGreen = { width: `${parseInt((results.futureCost / removeCommas(vars[1])) * 100, 10) + 10}%` };
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
							results={results}
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
						results={results}
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

function mapStateToProps(state){
  return{
    userType: state.userType,
    vars: state.vars,
    range: state.range,
    results: state.results
  }
}

export default connect(mapStateToProps, {getBusinessResults, getIndividualResults})(Results);
