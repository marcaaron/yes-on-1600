import React, { Component } from 'react';
import Parser from 'html-react-parser';
import { connect } from 'react-redux';
import { removeCommas, addCommas } from '../helpers/helper-functions';
import { updateVar, incIndex, setError, updateRange, decIndex } from '../actions';
import { validateInput } from '../helpers/validate-input';
// import '../css/Header.css';
import questions from '../questions';

class Question extends Component {

  // Always maintain focus on input
	componentDidUpdate() {
		if(this.refs.input) {
			this.refs.input.focus();
		}
	}

  handleBackBtn = () => {
    const {index, decIndex, setError} = this.props;
    if(index >= 0){
      setError(null);
      decIndex();
    }
  }

  handleFwdBtn = (e) => {
    const { vars, index, incIndex, setError, updateVar } = this.props;
    const input = vars[index] || this.refs.input.value;
    const {error, status} = validateInput(this.props.question, this.props.vars, input);
    if (index > -1){
      if(status && !error){
  			incIndex();
        setError(null);
        updateVar(input, this.props.index);
      }else{
        setError(error);
      }
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
      this.props.setError(null);
      this.props.updateVar(input, this.props.index);
    }else{
      this.props.setError(error);
    }
	};

  handleRange = (e) => {
		const range = e.target.value;
    this.props.updateRange(range);
    this.props.updateVar(range, this.props.index);
	}

	render() {
    const {question: { id, showIcon, questionText, unit, inputType, options, tip, link, tipSize}, vars, index, range, questionArray} = this.props;

		let lBtnVisibile, rBtnVisibile={};
		if(index<0){
			lBtnVisibile = {visibility:'hidden'}
		};
		if(index===-1 || (index>0 && !questionArray[index])){
			rBtnVisibile = {visibility:'hidden'}
		}

		return (
			<form onSubmit={this.handleSubmit}>
				<div className="wwse-label">
          <h3>{questionText}</h3>
        </div>
        <div className="wwse-input-box">
				{unit && <i className="fa fa-1x fa-usd wwse-dollar-sign"></i>}

				{inputType === 'number' &&
					<input
            key={id}
            onChange={this.handleChange}
						className="wwse-number-box"
						type="number"
						onKeyPress={this.handleKeyPress}
						value={vars[index] ? vars[index] : ''}
						autoFocus
						ref="input"
					>
					</input>}

				{inputType === 'text' &&

					<input
            key={id}
            onChange={this.handleChange}
						className="wwse-number-box"
						type="text"
						onKeyPress={this.handleKeyPress}
						value={vars[index] ? vars[index] : ''}
						autoFocus
						ref="input"
					>
					</input>}

				{inputType === 'select-box' &&
					<select
						defaultValue={vars[index]}
						onChange={this.handleChange}
						className="wwse-select-input"
						ref="input"
					>
						{options.map((item, index) => {
							return <option key={index} value={item}>{item}</option>
						})}
					</select>
				}

				{inputType === 'range' &&
					<div className="wwse-slidecontainer">
						<input onChange={this.handleRange} type="range" min="0" max="100"
							ref="input"
							value={vars[index] ? vars[index] : 50} className="wwse-slider" id="myRange"></input>
						<span className="wwse-range">{range}%</span>
					</div>
				}
				</div>

				<div className="wwse-controls">
          <div>
            <a onClick={(e)=>e.preventDefault()}>
              <div className="wwse-circle">
        				<i
                  style={lBtnVisibile} onClick={this.handleBackBtn}
                  className="fa fa-2x fa-chevron-left">
                </i>
              </div>
            </a>
          </div>
          <div>
  	        <button
              className="submit"
              type="submit">
              Next
            </button>
          </div>
          <div>
            <a onClick={(e)=>e.preventDefault()}>
              <div className="wwse-circle">
  				      <i
                  style={rBtnVisibile}
                  onClick={this.handleFwdBtn}
                  className="fa fa-2x fa-chevron-right">
                </i>
              </div>
            </a>
          </div>
        </div>

				{tip &&
					<div
            className="wwse-info"
            style={{fontSize:tipSize}}
          >
          <div className="wwse-info-icon">
						{showIcon ?
              <i className="fa fa-2x fa-info-circle"></i>
              :
              <div style={{height:'30px'}}>&nbsp;</div>
            }
          </div>
						{Parser(tip)}
						<a href={link && link[0]} target="_blank">{link && link[1]}</a>
					</div>
				}
			</form>
		);
	}
};

function mapStateToProps(state){
  return{
    vars: state.vars,
    index: state.index,
    questionArray: questions[state.userType],
    range: state.range
  }
}

export default connect(mapStateToProps, {updateVar, decIndex, incIndex, setError, updateRange})(Question);
