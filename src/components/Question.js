import React, { Component } from 'react';
import Parser from 'html-react-parser';
import { connect } from 'react-redux';
import { removeCommas, addCommas } from '../helpers/helper-functions';
import { updateVar, incIndex, setError, openModal, updateRange } from '../actions';
import { validateInput } from '../helpers/validate-input';

class Question extends Component {

  // Always maintain focus on input
	componentDidUpdate() {
		if(this.input) {
			this.input.focus();
		}
	}

  // Disallow invalid characters from all input fields
	handleKeyPress = (e) => {
		const allowed = '0123456789';
		function contains(stringValue, charValue){
			return stringValue.indexOf(charValue) > -1;
		}
		const invalidKey = e.key.length === 1 && !contains(allowed, e.key);
		invalidKey && e.preventDefault();
	}

  handleChange = (e) => {
		e.preventDefault();
		let variable = addCommas(removeCommas(e.target.value));
    const index = this.props.index;
    this.props.updateVar(variable, index);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let input = e.nativeEvent.target[0].value;
    const {error, status} = validateInput(this.props.question, this.props.vars, input);
    if(status && !error){
			this.props.incIndex();
      this.props.updateVar(input, this.props.index);
    }else{
      this.props.setError(error);
      this.props.openModal();
    }
	};

  handleRange = (e) => {
		const range = e.target.value;
    this.props.updateRange(range);
    this.props.updateVar(range, this.props.index);
	}

	render() {
    const {question: { id, showIcon, questionText, unit, inputType, options, tip, link, tipSize}, vars, index, range} = this.props;

		return (
			<div className="card">
				<form onSubmit={this.handleSubmit}>
					<p className="card-text">{questionText}</p>
					<div className="input-container">
					{unit && <i className="fa fa-2x fa-usd"></i>}

					{inputType === 'number' &&
						<input
              key={id}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
							onChange={this.handleChange}
							className="select-box"
							ref={(input) => { this.input = input; }}
						>
							{options.map((item, index) => {
								return <option key={index} value={item}>{item}</option>
							})}
						</select>
					}

					{inputType === 'range' &&
						<div className="slidecontainer">
							<input onChange={this.handleRange} type="range" min="0" max="100"
								ref={(input) => { this.input = input; }}
								value={vars[index] ? vars[index] : 50} className="slider" id="myRange"></input>
							<span className="range">{range}%</span>
						</div>
					}
					</div>
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

function mapStateToProps(state){
  return{
    vars: state.vars,
    index: state.index,
    range: state.range
  }
}

export default connect(mapStateToProps, {updateVar, incIndex, setError, openModal, updateRange})(Question);
