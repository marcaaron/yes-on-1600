import React, { Component } from 'react';
import Header from './components/Header';
import Question from './components/Question';
import Results from './components/Results';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			userType: '',
			index: -1,
			vars:[],
			range:50,
		}
		this.handleUserType = this.handleUserType.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRange = this.handleRange.bind(this);
		this.handleBackBtn = this.handleBackBtn.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleFwdBtn = this.handleFwdBtn.bind(this);
	}

	handleBackBtn(){
		let index = this.state.index;
		let userType = this.state.userType;
		if(index>=0){
			index--;
			if(index===-1){
				userType='';
			}
		}
		this.setState({index, userType});
	}

	handleFwdBtn(){
		let index = this.state.index;
		if(index>-1){
			index++;
		}
		this.setState({index});
	}

	handleUserType(e){
		e.preventDefault();
		let index = this.state.index+1;
		this.setState({userType:e.target.value, index});
	}

	handleSubmit(e){
		e.preventDefault();
		let vars = [...this.state.vars];

		if(typeof this.state.vars[this.state.index]==='undefined'){
			const input = e.nativeEvent.target[0].value;
			vars.push(input);
		}

		const index = this.state.index+1;
		this.setState({index,vars});
		e.target.reset();
	}

	handleRange(e){
		const range = e.target.value;
		let vars = [...this.state.vars];
		vars[this.state.index]=e.target.value;
		this.setState({range,vars});
	}

	handleChange(e){
		e.preventDefault();
		let vars = [...this.state.vars];
		vars[this.state.index]=e.target.value;
		this.setState({vars});
	}

    render() {
		const questions = {
			individual:[
				{questionText:"Your Annual Household Income:", inputType:'text'},
				{questionText:"Your Net Annual Capital Gains:", inputType:'text'},
				{questionText:"Size of Your Household", inputType:'text'},
				{questionText:"Number of Adults over 19", inputType:'text'}
			],
			business:[
				{questionText:'Annual Total Payroll Costs:', inputType:'text'},
				{questionText:'Current Annual Healthcare Costs:', inputType:'text'},
				{questionText:'Total Number of Employees',
					inputType:'select-box',
					options: ['<10',"10-24","25-99","100-999",">1000"]
				},
				{questionText:'Percentage of Employees Covered', inputType:'range'}
			]
		};

		const questionArray = questions[`${this.state.userType}`];

    	return (
      	<div className="app-container">
		  	<Header
				handleBackBtn={this.handleBackBtn}
				handleFwdBtn={this.handleFwdBtn}
			/>
			<div className='header-gap'></div>

			{this.state.userType==='' &&
			<div className="card">
					<button
						onClick={this.handleUserType}
						type="submit"
						value="business">I'm a Business Owner
					</button>

					<button
						onClick={this.handleUserType}
						type="submit"
						value="individual">I'm an Individual
					</button>
			</div>}

		{this.state.index>-1 &&
		 this.state.index<questionArray.length &&
			<Question
				vars={this.state.vars}
				index={this.state.index}
				handleSubmit={this.handleSubmit}
				handleChange={this.handleChange}
				handleRange={this.handleRange}
				range={this.state.range}
				question={questionArray[this.state.index].questionText}
				inputType={questionArray[this.state.index].inputType}
				options={questionArray[this.state.index].options ||''}
			/>
		}

		{this.state.index>-1 && this.state.index === questionArray.length &&
			<Results
				userType={this.state.userType}
				vars={this.state.vars}
				range={this.state.range}/>
		}
	</div>
    );
  }
}

export default App;
