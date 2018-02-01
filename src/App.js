import React, { Component } from 'react';
import Header from './components/Header';
import Results from './components/Results';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			userType: '',
			index: 0,
			vars:[],
			range:50,
		}
		this.handleUserType = this.handleUserType.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRange = this.handleRange.bind(this);
	}

	handleUserType(e){
		e.preventDefault();
		this.setState({userType:e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
		const input = e.nativeEvent.target[0].value;
		const vars = [...this.state.vars, input]
		const index = this.state.index +1;
		this.setState({index,vars});
		e.target.reset();
	}

	handleRange(e){
		const range = e.target.value;
		this.setState({range});
	}

    render() {
			console.log('state =', this.state)
		const individualQuestions =[
			<div className="card">
				<form onSubmit={this.handleSubmit}>
					<p className="card-text">Please Enter Your Annual Household Income:</p>
					<input className="text-box" type="text" required></input>
					<button type="submit">Next &gt;&gt;</button>
				</form>
			</div>,
			<div className="card">
				<form onSubmit={this.handleSubmit}>
					<p className="card-text">Please Enter Your Net Annual Household Capital Gains:</p>
					<input className="text-box" type="text" required></input>
					<button type="submit">Next &gt;&gt;</button>
				</form>
			</div>,
			<div className="card">
				<form onSubmit={this.handleSubmit}>
					<p className="card-text">Please Enter The Size of Your Household:</p>
					<input className="text-box" type="text" required></input>
					<button type="submit">Next &gt;&gt;</button>
				</form>
			</div>,
			<div className="card">
				<form onSubmit={this.handleSubmit}>
					<p className="card-text">Number of Adults over 19:</p>
					<input className="text-box" type="text" required></input>
					<button type="submit">Next &gt;&gt;</button>
				</form>
			</div>
		];

		const businessQuestions =[
			<div className="card">
				<form onSubmit={this.handleSubmit}>
					<p className="card-text">Please Enter Your Annual Total Payroll Costs:</p>
					<input className="text-box" type="text" required></input>
					<button type="submit">Next &gt;&gt;</button>
				</form>
			</div>,
			<div className="card">
				<form onSubmit={this.handleSubmit}>
					<p className="card-text">Please Enter Your Current Annual Healthcare Costs:</p>
					<input className="text-box" type="text" required></input>
					<button type="submit">Next &gt;&gt;</button>
				</form>
			</div>,
			<div className="card">
				<form onSubmit={this.handleSubmit}>
					<p className="card-text">Total Number of Employees:</p>
					<select className="select-box" required>
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
							  <input onChange={this.handleRange} type="range" min="1" max="100" value={this.state.range} className="slider" id="myRange"></input>
							  <span className="range">{this.state.range}%</span>
					</div>
					<button type="submit">Next &gt;&gt;</button>
				</form>
			</div>
		];
    	return (
      		<div className="app-container">
		  		<Header/>
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
				user={this.state.userType}
				vars={this.state.vars}
				range={this.state.range}>
			</Results>
		}

		{this.state.userType==='individual' && typeof individualQuestions[this.state.index]==='undefined' &&
			<Results
				user={this.state.userType}
				vars={this.state.vars}
				range={this.state.range}>
			</Results>
		}
	{/* <!-- End App Container	 --> */}
	</div>
    );
  }
}

export default App;
