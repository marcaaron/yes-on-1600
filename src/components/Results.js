// HTML2CANVAS - temporarily disabled until social features restored
// import html2canvas from 'html2canvas';
// import BusinessRender from './BusinessRender';
// import IndividualRender from './IndividualRender';

import BusinessResults from './BusinessResults';

import IndividualResults from './IndividualResults';

import React, { Component } from 'react';
import {businessCalc} from '../helpers/business-calc';
import {individualCalc} from '../helpers/individual-calc';
import { removeCommas } from '../helpers/helper-functions';

class Results extends Component {
	constructor(props) {
		super(props);
		this.state = {
			futureCost: 0,
			income: 0,
			capitalGainsContribution: 0,
			premium: 0,
			savings: 0,
			totalPersonalContribution: 0,
			currentCosts:0,
			imageURL:'',
			imageb64:''
		}
		this.getResult = this.getResult.bind(this);
	}
	componentWillMount() {
		this.getResult();
	}
	componentDidMount(){
		// HTML2CANVAS - temporarily disabled until social features restored
		// html2canvas(document.querySelector('.social-render'),{
		// 	width:'630',
		// 	height:'630',
		// })
		// .then((canvas)=>{
		// 	document.querySelector('.social-render').remove();
		// 	const imageURL = (canvas).toDataURL('image/png');
		// 	this.setState({imageURL});
		// });
	}

	getResult() {
    function rmDecAndRound(input){
      if(!input.match(/>|<|-/)){
        return input = parseInt(removeCommas(input),10);
      }else{
        return input;
      }
    };

		if (this.props.userType === 'business') {
			let futureCost = businessCalc(rmDecAndRound(this.props.vars[2]), rmDecAndRound(this.props.vars[0]));
			this.setState({ futureCost });
		}
		 else {
			const state = individualCalc(
        rmDecAndRound(this.props.vars[0]),
        rmDecAndRound(this.props.vars[1]),
        rmDecAndRound(this.props.vars[2]),
        rmDecAndRound(this.props.vars[3]),
        rmDecAndRound(this.props.vars[4]),
        rmDecAndRound(this.props.vars[5])
      );
			this.setState(state);
		}
	}

	render() {
		if (this.props.userType === 'business') {
			const colorBarGreen = { width: `${parseInt((this.state.futureCost / removeCommas(this.props.vars[1])) * 100, 10) + 10}%` };
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
							imageURL={this.state.imageURL}
						/>
					</div>
					{/* Hidden Render >> html2canvas >> base64 image string */}
					{/* Temporarily disabled until social features restored */}
					{/* <div className="social-render">
						<BusinessRender
							vars={this.props.vars}
							futureCost={this.state.futureCost}
						/>
					</div> */}
				</div>
			);
		} else {
			return (
			// Individual Results
			<div>
				<div className='card'>
					<IndividualResults
						income={this.state.income}
						capitalGainsContribution={this.state.capitalGainsContribution}
						premium={this.state.premium}
						totalPersonalContribution={this.state.totalPersonalContribution}
						currentCosts={this.state.currentCosts}
						imageURL={this.state.imageURL}
						savings={this.state.savings}
						sizeOfHousehold={this.state.sizeOfHousehold}
						numberOfAdults={this.state.numberOfAdults}
						currentPremiums={this.state.currentPremiums}
						currentAdditionalMedical={this.state.currentAdditionalMedical}
					/>
				</div>
				{/* Hidden Render >> html2canvas >> base64 image string */}
				{/* Temporarily disabled until social features restored */}
				{/* <div className="social-render">
					<IndividualRender
						totalPersonalContribution={this.state.totalPersonalContribution}
						savings={this.state.savings}
					/>
				</div> */}
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

export default Results;
