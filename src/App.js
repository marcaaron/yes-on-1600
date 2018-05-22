import React, { Component } from 'react';
import Header from './components/Header';
import Question from './components/Question';
import ProgressBar from './components/ProgressBar';
import Results from './components/Results';
import StartCard from './components/StartCard';
import questions from './questions';
import ModalContainer from './components/ModalContainer';
import { removeCommas, addCommas } from './helpers/helper-functions';
import { validateInput } from './helpers/validate-input';
import './App.css';

class App extends Component {

  state = {
		userType: '',
		index: -1,
		vars: [],
		range: 50,
		confirm: false,
		modalIsOpen: false,
		error: ''
	}

	handleSelectBtn = (e) => {
		let vars = [...this.state.vars];
		let index = this.state.index + 1;
		let input = e.target.value;
		vars[this.state.index] = input;
		this.setState({ vars, index });
	}

	// Modal Functions //
	openModal = () => {
		this.setState({ modalIsOpen: true });
	}

	closeModal = () => {
		this.setState({ modalIsOpen: false });
	}

	handleBackBtn = () => {
		let index = this.state.index;
		let userType = this.state.userType;
		let vars = [...this.state.vars];
		if (index >= 0) {
			index--;
				if (index === -1) {
					userType = '';
					vars = [];
				}
			}
		this.setState({ index, userType, vars });
	}

	handleFwdBtn = () => {
		let index = this.state.index;
		if (index > -1 && this.state.vars[this.state.index]) {
					index++;
					this.setState({index});
		}
	}

	handleUserType = (e) => {
		e.preventDefault();
		let index = this.state.index + 1;
		this.setState({ userType: e.target.value, index });
	}

	handleSubmit = (e) => {
		e.preventDefault();
    let index = this.state.index;
		const questionArray = questions[this.state.userType];
		const question = questionArray[index];
		let vars = [...this.state.vars];
		let input = e.nativeEvent.target[0].value;

    const {error, status} = validateInput(question, vars, input);

    if(status && !error){
			index++;
			this.setState({ index, vars });
			e.target.reset();
    }else{
      this.setState({error});
      this.openModal();
    }
	};

	handleChange = (e) => {
		e.preventDefault();
		let vars = [...this.state.vars];
		vars[this.state.index] = addCommas(removeCommas(e.target.value));
		if (vars[this.state.index] < 0) {
			vars[this.state.index] = 0
		}
		this.setState({ vars });
	}

	handleRange = (e) => {
		const range = e.target.value;
		let vars = [...this.state.vars];
		vars[this.state.index] = e.target.value;
		this.setState({ range, vars });
	}

	render() {
		const questionArray = questions[`${this.state.userType}`];

    const { modalIsOpen, error, index } = this.state;
		return (
			<div className="app-container">
        <ModalContainer
          modalIsOpen={modalIsOpen}
          closeModal={this.closeModal}
          error={error}
        />
				<Header
					handleBackBtn={this.handleBackBtn}
					handleFwdBtn={this.handleFwdBtn}
					index={index}
					questionArray={questionArray}
				/>
				<div className='card-content'>

				{this.state.userType === '' &&
				  <StartCard handleUserType={this.handleUserType}/>
				}

				{index > -1 &&
					index < questionArray.length &&
					<Question
						vars={this.state.vars}
						index={index}
						handleSubmit={this.handleSubmit}
						handleChange={this.handleChange}
						handleRange={this.handleRange}
						range={this.state.range}
						handleSelectBtn={this.handleSelectBtn}
            questionArray={questionArray[index]}
					/>
				}

				{index > -1 && index !== questionArray.length &&
					<ProgressBar
						index={index}
						questionArray={questionArray}
					/>
				}

				{index > -1 && index === questionArray.length &&
					<Results
						userType={this.state.userType}
						vars={this.state.vars}
						range={this.state.range} />
				}
				</div>
			</div>
		);
	}
}

export default App;
