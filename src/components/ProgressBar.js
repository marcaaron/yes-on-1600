import React, { Component } from 'react';

class ProgressBar extends Component {
	render() {
		return (
			<div className="progress-bar">
				{this.props.questionArray && this.props.questionArray.map((el, index) => {
					if (index <= this.props.index) {
						return <div key={index} className="progress-point-active"></div>
					} else {
						return <div key={index} className="progress-point"></div>
					}
				})}
				{/* <div className="progress-line"></div> */}
			</div>
		);
	}
};

export default ProgressBar;
