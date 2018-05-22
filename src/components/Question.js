import React, { Component } from 'react';
import Parser from 'html-react-parser';

class Question extends Component {
	handleKeyPress = (event) => {
		const allowed = '0123456789';
		function contains(stringValue, charValue){
			return stringValue.indexOf(charValue) > -1;
		}
		const invalidKey = event.key.length === 1 && !contains(allowed, event.key);
		invalidKey && event.preventDefault();
	}

	componentDidUpdate() {
		if(this.input) {
			this.input.focus();
		}
	}

	render() {
    const {questionArray: { id, showIcon, questionText, unit, inputType, options, tip, link, tipSize}, handleSubmit, handleChange, vars, index, handleSelectBtn, handleRange, range} = this.props;

		if (inputType === '' || typeof inputType === 'undefined') {
			console.error('Must pass an inputType to Question component!');
		}

		if (inputType === 'select-box' && options === '') {
			console.error('Must pass options to Question with inputType "select-box"');
		}
		if (inputType === 'button' && options === '') {
			console.error('Must pass options to Question with inputType "button"');
		}
		return (
			<div className="card">
				<form onSubmit={handleSubmit}>
					<p className="card-text">{questionText}</p>
					<div className="input-container">
					{unit && <i className="fa fa-2x fa-usd"></i>}
					{inputType === 'number' &&
						<input
              key={id}
              onChange={handleChange}
							className="number-box"
							type="number"
							onKeyPress={this.handleKeyPress}
							value={vars[index] ? vars[index] : ''}
							autoFocus
							ref={(input) => { this.input = input; }}
						>
						</input>}

					{inputType === 'text' &&

						<input
              key={id}
              onChange={handleChange}
							className="text-box"
							type="text"
							onKeyPress={this.handleKeyPress}
							value={vars[index] ? vars[index] : ''}
							autoFocus
							ref={(input) => { this.input = input; }}
						>
						</input>}

					{inputType === 'select-box' &&
						<select
							defaultValue={vars[index]}
							onChange={handleChange}
							className="select-box"
							ref={(input) => { this.input = input; }}
						>
							{options.map((item, index) => {
								return <option key={index} value={item}>{item}</option>
							})}
						</select>
					}

					{inputType === 'button' &&
						options.map((item, index) => {
							return (
								<button
									type="button"
									onClick={handleSelectBtn}
									key={index}
									value={item}
								>
									{item}
								</button>
							);
						})
					}

					{inputType === 'range' &&
						<div className="slidecontainer">
							<input onChange={handleRange} type="range" min="0" max="100"
								ref={(input) => { this.input = input; }}
								value={vars[index] ? vars[index] : 50} className="slider" id="myRange"></input>
							<span className="range">{range}%</span>
						</div>
					}
					</div>
					{/* End input-container */}
					{tip &&
						<div className="tip-box" style={{fontSize:tipSize}}>
							{showIcon ?
                <i className="fa fa-2x fa-info-circle tip-icon"></i>
                :
                <div style={{height:'30px'}}>&nbsp;</div>
              }
							<div className="tip">
								{Parser(tip)}
							</div>
							<a className="tip-link" href={link && link[0]} target="_blank">{link && link[1]}</a>
						</div>
					}
					{inputType !== 'button' &&
						<button type="submit">Next</button>
					}
				</form>
			</div>
		);
	}
};

export default Question;
