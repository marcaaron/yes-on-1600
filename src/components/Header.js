import React, { Component } from 'react';
import questions from '../questions';
import { connect } from 'react-redux';
import { incIndex, decIndex } from '../actions';

import '../css/Header.css';

const logo1 = `http://d3n8a8pro7vhmx.cloudfront.net/themes/5a7e8848ed0e4671c4000000/attachments/original/1525051109/yeson1600.f74b0a9c.svg`;

class Header extends Component {

  handleBackBtn = () => {
    const {index, decIndex} = this.props;
    if(index >= 0){
      decIndex();
    }
  }

  handleFwdBtn = () => {
    const { vars, index, incIndex } = this.props;
    if (index > -1 && vars[index]){
      incIndex();
    }
  }

	render() {
      const { index, questionArray } = this.props;
			let lBtnVisibile, rBtnVisibile={};
			if(index<0){
				lBtnVisibile = {visibility:'hidden'}
			};
			if(index===-1 || (index>0 && !questionArray[index])){
				rBtnVisibile = {visibility:'hidden'}
			}
		return (
			<header>
				<div className='header-content'>

				<i style={lBtnVisibile} onClick={this.handleBackBtn} className="fa fa-3x fa-chevron-left"></i>
				<div className="header-container">
          {this.props.children}
				</div>
				<i style={rBtnVisibile} onClick={this.handleFwdBtn} className="fa fa-3x fa-chevron-right"></i>
				</div>
			</header>
		);
	}
};

function mapStateToProps(state){
  return{
    index: state.index,
    questionArray: questions[state.userType],
    vars: state.vars
  }
}

export default connect(mapStateToProps, {decIndex, incIndex})(Header);
