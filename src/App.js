import React, { Component } from 'react';
import Header from './components/Header';
import Results from './components/Results';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			user: null,
			index: 0,
			vars:[],
			range:50,
			futureCost:0,
			colorBarRed:0,
		}
		this.handleUser = this.handleUser.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRange = this.handleRange.bind(this);
	}

	handleUser(e){
		e.preventDefault();
		this.setState({user:e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
		const event = e.nativeEvent;
		let vars = [...this.state.vars]
		let data = event.target[0].value;
		vars.push(data);
		let index = this.state.index;
		index++;
		this.setState({index,vars});
		e.target.reset();
	}
	componentDidMount(){
		console.log('');
		console.log(`%cFormFaction`, 'background:black; padding:10px; color:#00fffa');
		console.log('');
	}

	handleRange(e){
		const range = e.target.value;
		this.setState({range});
	}

    render() {
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
		  		<Header
			  		headOne="YES! ON I-1600"
			  		headTwo="COST CALCULATOR"
		  		/>
				<div className='header-gap'></div>

			{this.state.user===null &&
			<div className="card">
					<button
						onClick={this.handleUser}
						type="submit"
						value="business">I'm a Business Owner
					</button>

					<button
						onClick={this.handleUser}
						type="submit"
						value="individual">I'm an Individual
					</button>
			</div>}

		{this.state.user==='business' &&
			businessQuestions[this.state.index]
		}

		{this.state.user==='individual' &&
			individualQuestions[this.state.index]
		}

		{this.state.user==='business' && typeof businessQuestions[this.state.index]==='undefined' &&
			<Results
				user={this.state.user}
				vars={this.state.vars}
				range={this.state.range}>
			</Results>
		}

		{this.state.user==='individual' && typeof individualQuestions[this.state.index]==='undefined' &&
			<Results
				user={this.state.user}
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
