import React from 'react';
import { connect } from 'react-redux';
import questions from '../questions';

const ProgressBar = ({index, questionArray}) => {
	return (
		<div className="progress-bar">
			{questionArray && questionArray.map((el, i) => {
				if (i <= index) {
					return <div key={i} className="progress-point-active"></div>
				} else {
					return <div key={i} className="progress-point"></div>
				}
			})}
		</div>
	);
};

function mapStateToProps(state){
  return{
    index: state.index,
    questionArray: questions[state.userType]
  }
}

export default connect(mapStateToProps)(ProgressBar);
