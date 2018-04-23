import React, { Component } from 'react';
import Header from './components/Header';
import Question from './components/Question';
import ProgressBar from './components/ProgressBar';
import Results from './components/Results';
import StartCard from './components/StartCard';
import questions from './questions';
import Modal from 'react-modal';
import { removeCommas, addCommas } from './helpers/helper-functions';
import './App.css';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItem: 'center'
	}
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			userType: '',
			index: -1,
			vars: [],
			range: 50,
			confirm: false,
			modalIsOpen: false,
			error: '',
			contentStyle:{}
		}
		this.handleUserType = this.handleUserType.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRange = this.handleRange.bind(this);
		this.handleBackBtn = this.handleBackBtn.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleFwdBtn = this.handleFwdBtn.bind(this);
		this.handleSelectBtn = this.handleSelectBtn.bind(this);
		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	handleSelectBtn(e) {
		let vars = [...this.state.vars];
		let index = this.state.index + 1;
		let input = e.target.value;
		vars[this.state.index] = input;
		this.setState({ vars, index });
	}

	// Modal Functions //
	openModal() {
		this.setState({ modalIsOpen: true });
	}

	closeModal() {
		this.setState({ modalIsOpen: false });
	}

	afterOpenModal() {
		// references are now sync'd and can be accessed.
		this.subtitle.style.color = '#f00';
	}

	componentDidMount(){
		// Potentially remove & replace with fixed height during final version but this will keep our content below our fixed header while we make edits.
		if(document.querySelector('header')){
			const contentStyle = {...this.state.contentStyle};
			// Get header height
			const headerHeight = document.querySelector('header').getBoundingClientRect().height;
			// Programmatically set content marginTop
			contentStyle.marginTop =`${headerHeight}px`;
			this.setState({contentStyle})
		}
	}



	handleBackBtn() {
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

	handleFwdBtn() {
		let index = this.state.index;
		if (index > -1 && this.state.vars[this.state.index]) {
					index++;
					this.setState({index});
		}
	}
	handleUserType(e) {
		e.preventDefault();
		let index = this.state.index + 1;
		this.setState({ userType: e.target.value, index });
	}

	handleSubmit(e) {
		e.preventDefault();
		const questionArray = questions[`${this.state.userType}`];
		const question = questionArray[this.state.index];
		let vars = [...this.state.vars];
		let input = e.nativeEvent.target[0].value;
		function findMax(element) {
			return element.questionText === question.max.val;
		}

		// If it's empty
		if (!input) {
			const error = 'This field is required!';
			this.setState({ error });
			this.openModal();
		}
		// else if it has a 'min' option
		else if (question.min && parseInt(input, 10) < question.min.val) {
			const error = question.min.error;
			this.setState({ error });
			this.openModal();
		}
		// else if it has a 'max' option and max references the value returned by a preceding question - flagged by questionText and found with the above function findMax()/

    //Removed due to findIndex not being compatible with IE 11... and since we don't need this functionality and can hard code the correct index for now...

    // else if (question.max && typeof question.max.val === 'string' &&
		// 	parseInt(input, 10) > this.state.vars[questionArray.findIndex(findMax)]
		// )

    else if (question.max && typeof question.max.val === 'string' &&
			parseInt(input, 10) > this.state.vars[0]
		)
    {
			const error = question.max.error;
			this.setState({ error });
			this.openModal();
		}
		else if (question.max && (typeof question.max.val === 'number') &&
			parseInt(input, 10) > question.max.val
		) {
			const error = question.max.error;
			this.setState({ error });
			this.openModal();
		}
		else {
			if (typeof this.state.vars[this.state.index] === 'undefined') {
				vars.push(input);
			}
			const index = this.state.index + 1;
			this.setState({ index, vars });
			e.target.reset();
		}
	};

	handleChange(e) {
		e.preventDefault();
		let vars = [...this.state.vars];
		vars[this.state.index] = addCommas(removeCommas(e.target.value));
		if (vars[this.state.index] < 0) {
			vars[this.state.index] = 0
		}
		this.setState({ vars });
	}

	handleRange(e) {
		const range = e.target.value;
		let vars = [...this.state.vars];
		vars[this.state.index] = e.target.value;
		this.setState({ range, vars });
	}

	render() {
		const questionArray = questions[`${this.state.userType}`];
		return (
			<div className="app-container">
				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="Example Modal"
				>
					<h2 className="modal-header" ref={subtitle => this.subtitle = subtitle}>Alert:</h2>
					<div className="modal-text">{this.state.error}</div>
					<button className="modal-btn" onClick={this.closeModal}>Close</button>
				</Modal>
				<Header
					handleBackBtn={this.handleBackBtn}
					handleFwdBtn={this.handleFwdBtn}
					index={this.state.index}
					questionArray={questionArray}
				/>
				<div style={this.state.contentStyle} className='card-content'>

				{this.state.userType === '' &&
				<StartCard handleUserType={this.handleUserType}/>
				}

				{this.state.index > -1 &&
					this.state.index < questionArray.length &&
					<Question
            showIcon={questionArray[this.state.index].showIcon || ''}
						vars={this.state.vars}
						index={this.state.index}
						handleSubmit={this.handleSubmit}
						handleChange={this.handleChange}
						handleRange={this.handleRange}
						range={this.state.range}
						question={questionArray[this.state.index].questionText}
						unit={questionArray[this.state.index].unit}
						inputType={questionArray[this.state.index].inputType}
						options={questionArray[this.state.index].options || ''}
						tip={questionArray[this.state.index].tip || ''}
						link={questionArray[this.state.index].link || ''}
						handleSelectBtn={this.handleSelectBtn}
						tipSize={questionArray[this.state.index].tipSize || ''}
					/>
				}
				{this.state.index > -1 && this.state.index !== questionArray.length &&
					<ProgressBar
						index={this.state.index}
						questionArray={questionArray}
					/>
				}

				{this.state.index > -1 && this.state.index === questionArray.length &&
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
