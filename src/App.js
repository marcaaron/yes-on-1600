import React, { Component } from 'react';
import Header from './components/Header';
import Question from './components/Question';
import Results from './components/Results';
import questions from './questions';

import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			userType: '',
			index: -1,
			vars:[],
			range:50,
			confirm:false,
			hiddenIndexes:[],
		}
		this.handleUserType = this.handleUserType.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRange = this.handleRange.bind(this);
		this.handleBackBtn = this.handleBackBtn.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleFwdBtn = this.handleFwdBtn.bind(this);
		this.handleSelectBtn = this.handleSelectBtn.bind(this);
		this.skipIndex = this.skipIndex.bind(this);

	}

	handleSelectBtn(e){
		const questionArray = questions[`${this.state.userType}`];
		const question = questionArray[this.state.index];
		let vars = [...this.state.vars];
		let index = this.state.index+1;
		let input = e.target.value;
		let hiddenIndexes = [...this.state.hiddenIndexes];
		console.log(input,question.condition);
		if(input===question.condition){
			console.log('setting indexes to skip');
			hiddenIndexes = [...question.indexToHide];
		}
		vars[this.state.index] = input;
		this.setState({vars, index, hiddenIndexes});
	}

	skipIndex(){
		const questionArray = questions[`${this.state.userType}`];
		const question = questionArray[this.state.index];
		let index = this.state.index+1;
		let vars = [...this.state.vars];
		vars.push(question.defaultValue);
		this.setState({index, vars});
	}

	handleBackBtn(){
		let index = this.state.index;
		let userType = this.state.userType;
		let vars = [...this.state.vars];
		let hiddenIndexes = [...this.state.hiddenIndexes];
		// Prevent the app from repeatedly calling skipIndex() when we're at the index immediately AFTER any indices we want to skip. We check if the hiddenIndexes blocklist includes the previous index and if it does decrement index by 2 instead of 1.
		if(this.state.hiddenIndexes.includes(index-1)){
			index-=3;
		}else{
			if(index>=0){
				index--;
				if(index===-1){
					userType='';
					vars=[];
					hiddenIndexes=[];
				}
			}
		}
		this.setState({index, userType,vars, hiddenIndexes});
	}

	componentDidUpdate(){
		if(this.state.hiddenIndexes.includes(this.state.index)){
			console.log('skip this one');
			this.skipIndex();
		}
	}

	handleFwdBtn(){
		let index = this.state.index;
		if(index>-1 && this.state.vars[this.state.index]){
			const questionArray = questions[`${this.state.userType}`];
			if(questionArray[this.state.index].confirm && !this.state.confirm){
				if(window.confirm(questionArray[this.state.index].confirmText)){
					index++;
					const confirm = true;
					this.setState({index, confirm});
				}
			}else{
				if(this.state.hiddenIndexes.includes(index+1)){
					index+=3;
				}else{
					index++;
				}
				this.setState({index});
			}
		}
	}

	handleUserType(e){
		e.preventDefault();
		let index = this.state.index+1;
		this.setState({userType:e.target.value, index});
	}

	handleSubmit(e){
			e.preventDefault();
			console.log(e.target);
			const questionArray = questions[`${this.state.userType}`];

			if(questionArray[this.state.index].confirm && !this.state.confirm){
				if(window.confirm(questionArray[this.state.index].confirmText)){
					let vars = [...this.state.vars];
					let input = e.nativeEvent.target[0].value || e.target.value;
					if(!input){
						alert('This field is required!')
					}else{
						if(typeof this.state.vars[this.state.index]==='undefined'){
							vars.push(input);
						}
						const confirm = true;
						const index = this.state.index+1;
						this.setState({index,vars, confirm});
						e.target.reset();
					}
				}
			}else{
				const question = questionArray[this.state.index];
				let vars = [...this.state.vars];
				let input = e.nativeEvent.target[0].value;
				function findMax(element) {
  					return element.questionText===question.max.val;
				}
				// If it's empty
				if(!input){
					alert('This field is required!')
				}
				// else if it has a 'min' option
				else if(question.min && parseInt(input,10) < question.min.val){
					alert(question.min.error);
				}
				// else if it has a 'max' option and max references the value returned by a preceding question - flagged by questionText and found with the above function findMax()/
				else if(question.max &&
					parseInt(input,10) > this.state.vars[questionArray.findIndex(findMax)]
				){
					alert(question.max.error);
				}else{
					if(typeof this.state.vars[this.state.index]==='undefined'){
						vars.push(input);
					}
					const index = this.state.index+1;
					let hiddenIndexes = [...this.state.hiddenIndexes];
					console.log(input,question.condition);
					if(parseInt(input,10)===question.condition){
						console.log('setting indexes to skip');
						hiddenIndexes = [...question.indexToHide];
					}else if(question.condition && parseInt(input,10!==question.condition)){
						hiddenIndexes = [];
					}
					this.setState({index,vars,hiddenIndexes});
					e.target.reset();
				}
			}
		}

	handleChange(e){
		e.preventDefault();
		let vars = [...this.state.vars];
		vars[this.state.index] = e.target.value;
		this.setState({vars});
	}

	handleRange(e){
		const range = e.target.value;
		let vars = [...this.state.vars];
		vars[this.state.index]=e.target.value;
		this.setState({range,vars});
	}


    render() {
		const questionArray = questions[`${this.state.userType}`];

    	return (
      	<div className="app-container">
		  	<Header
				handleBackBtn={this.handleBackBtn}
				handleFwdBtn={this.handleFwdBtn}
				index={this.state.index}
				questionArray={questionArray}
			/>
			<div className='header-gap'></div>

			{this.state.userType==='' &&
			<div className="card">
					<button
						onClick={this.handleUserType}
						type="submit"
						value="business">
						I'm a Business Owner
					</button>

					<button
						onClick={this.handleUserType}
						type="submit"
						value="individual">
						I'm an Individual
					</button>
			</div>}

		{this.state.index>-1 &&
		 this.state.index<questionArray.length && !this.state.hiddenIndexes.includes(this.state.index) &&
			<Question
				vars={this.state.vars}
				index={this.state.index}
				handleSubmit={this.handleSubmit}
				handleChange={this.handleChange}
				handleRange={this.handleRange}
				range={this.state.range}
				question={questionArray[this.state.index].questionText}
				unit={questionArray[this.state.index].unit}
				inputType={questionArray[this.state.index].inputType}
				options={questionArray[this.state.index].options ||''}
				tip={questionArray[this.state.index].tip||''}
				link={questionArray[this.state.index].link||''}
				handleSelectBtn = {this.handleSelectBtn}
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
