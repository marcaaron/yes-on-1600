import React, { Component } from 'react';
import Header from './components/Header';
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

		// Added this for range sliders and other none text based inputs in the case that a user does NOTHING and thus there is no 'change'. If there is no value in vars for the current index then handleSubmit should create the value otherwise our handleChange will have added it already and we don't need to push a duplicate value to vars.

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
		const individualQuestions =[
			<div className="card">
				<form onSubmit={this.handleSubmit}>
					<p className="card-text">Please Enter Your Annual Household Income:</p>
					<input onChange={this.handleChange} className="text-box"
						type="text"
						value={this.state.vars[this.state.index] ? this.state.vars[this.state.index] : ''}
						required>
					</input>
					<button type="submit">Next &gt;&gt;</button>
				</form>
			</div>,
			<div className="card">
				<form onSubmit={this.handleSubmit}>
					<p className="card-text">Please Enter Your Net Annual Household Capital Gains:</p>
					<input onChange={this.handleChange} className="text-box" type="text" value={this.state.vars[this.state.index] ? this.state.vars[this.state.index] : ''} required></input>
					<button type="submit">Next &gt;&gt;</button>
				</form>
			</div>,
			<div className="card">
				<form onSubmit={this.handleSubmit}>
					<p className="card-text">Please Enter The Size of Your Household:</p>
					<input onChange={this.handleChange} className="text-box" type="text" value={this.state.vars[this.state.index] ? this.state.vars[this.state.index] : ''} required></input>
					<button type="submit">Next &gt;&gt;</button>
				</form>
			</div>,
			<div className="card">
				<form onSubmit={this.handleSubmit}>
					<p className="card-text">Number of Adults over 19:</p>
					<input onChange={this.handleChange} className="text-box" type="text" value={this.state.vars[this.state.index] ? this.state.vars[this.state.index] : ''} required></input>
					<button type="submit">Next &gt;&gt;</button>
				</form>
			</div>
		];

		const businessQuestions =[
			<div className="card">
				<form onSubmit={this.handleSubmit}>
					<p className="card-text">Please Enter Your Annual Total Payroll Costs:</p>
					<input onChange={this.handleChange} className="text-box" type="text" value={this.state.vars[this.state.index] ? this.state.vars[this.state.index] : ''} required></input>
					<button type="submit">Next &gt;&gt;</button>
				</form>
			</div>,
			<div className="card">
				<form onSubmit={this.handleSubmit}>
					<p className="card-text">Please Enter Your Current Annual Healthcare Costs:</p>
					<input onChange={this.handleChange} className="text-box" type="text" value={this.state.vars[this.state.index] ? this.state.vars[this.state.index] : ''} required></input>
					<button type="submit">Next &gt;&gt;</button>
				</form>
			</div>,
			<div className="card">
				<form onSubmit={this.handleSubmit}>
					<p className="card-text">Total Number of Employees:</p>
					<select onChange={this.handleChange} className="select-box" required>
							{/* These are tricky because if a user moves forward then back the option will no longer be selected... solution? */}
							<option value="<10">&lt; 10</option>
							<option value="10-24">10-24</option>
							<option value="25-99">25-99</option>
							<option value="100-999">100-999</option>
							<option value=">1000">&gt; 1000</option>
					</select>
					<button type="submit">Next &gt;&gt;</button>
				</form>
			</div>,
			<div className="card">
				<p className="card-text">Percentage of Employees Covered:</p>
				<form onSubmit={this.handleSubmit}>
					<div className="slidecontainer">
							  <input onChange={this.handleRange} type="range" min="1" max="100" value={this.state.vars[this.state.index] ? this.state.vars[this.state.index] : 50} className="slider" id="myRange"></input>
							  <span className="range">{this.state.range}%</span>
					</div>
					<button type="submit">Next &gt;&gt;</button>
				</form>
			</div>
		];
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

		{this.state.userType==='business' &&
			businessQuestions[this.state.index]
		}

		{this.state.userType==='individual' &&
			individualQuestions[this.state.index]
		}

		{this.state.userType==='business' && typeof businessQuestions[this.state.index]==='undefined' &&
			<Results
				userType={this.state.userType}
				vars={this.state.vars}
				range={this.state.range}/>
		}

		{this.state.userType==='individual' && typeof individualQuestions[this.state.index]==='undefined' &&
			<Results
				userType={this.state.userType}
				vars={this.state.vars}/>
		}
	{/* <!-- End App Container	 --> */}
	</div>
    );
  }
}

export default App;
