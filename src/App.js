import React, { Component } from 'react';

// Import Components

import Header from './components/Header';
import Question from './components/Question';
import ProgressBar from './components/ProgressBar';
import Results from './components/Results';
import StartCard from './components/StartCard';
import questions from './questions';
import ModalContainer from './components/ModalContainer';
import './App.css';

// Import Redux Stuff
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {
  // The app works by tracking a position (index) in an array of supplied questions
  // Index is initialized to -1
  // If at any point index === -1 that means we are at the beginning and should dump our data and reset our userType
  componentWillUpdate(nextProps){
    if(nextProps.index===-1){
      this.props.setUserType('');
      if(this.props.vars.length !== 0){
        this.props.setVars([]);
      }
    }
  }

	render() {
    const { userType, index, questionArray } = this.props;

    const app_position = {
      start: userType === '',
      question: index > -1 && index < questionArray.length,
      progress: index > -1 && index !== questionArray.length,
      end: index > -1 && index === questionArray.length
    }

		return (
			<div className="app-container">
        <ModalContainer/>
				<Header/>
				<div className='card-content'>

  				{
            app_position.start &&
            <StartCard/>
  				}
  				{
            app_position.question &&
  					<Question question={questionArray[index]} />
  				}
  				{
            app_position.progress &&
  					<ProgressBar />
  				}
  				{
            app_position.end &&
  					<Results />
  				}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
  return {
    userType: state.userType,
    index: state.index,
    questionArray: questions[state.userType],
    vars: state.vars
  }
}
export default connect(mapStateToProps, actions)(App);
