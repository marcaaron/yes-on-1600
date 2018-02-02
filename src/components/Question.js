import React, { Component } from 'react';
import '../css/Question.css';

class Question extends Component {
	render() {
		if (this.props.inputType==='' || typeof this.props.inputType === 'undefined'){
			console.error('Must pass an inputType to Question component!');
		}

		if(this.props.inputType==='select-box' && this.props.options === ''){
			console.error('Must pass options to Question with inputType "select-box"');
		}
		return (
			<div className="card">
				<form onSubmit={this.props.handleSubmit}>
					<p className="card-text">{this.props.question}</p>

					{this.props.inputType==='text'&&
					<input onChange={this.props.handleChange}
						   className="text-box"
						   type="text"
						   value={this.props.vars[this.props.index] ? this.props.vars[this.props.index] : ''}
						   required
					>
					</input>}

					{this.props.inputType==='select-box' &&
						<select defaultValue={this.props.vars[this.props.index]} onChange={this.props.handleChange} className="select-box" required>
							{this.props.options.map((item, index)=>{
									return <option key={index} value={item}>{item}</option>
							})}
						</select>
					}
					{this.props.inputType==='range' &&
						<div className="slidecontainer">
							<input onChange={this.props.handleRange} type="range" min="1" max="100" value={this.props.vars[this.props.index] ? this.props.vars[this.props.index] : 50} className="slider" id="myRange"></input>
							<span className="range">{this.props.range}%</span>
						</div>
					}
					<button type="submit">Next &gt;&gt;</button>
				</form>
			</div>
		);
	}
};

export default Question;
