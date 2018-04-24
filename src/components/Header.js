import React, { Component } from 'react';
import '../css/Header.css';
import logo1 from '../yeson1600.svg';

class Header extends Component {
	render() {
			let lBtnVisibile, rBtnVisibile={};
			if(this.props.index<0){
				lBtnVisibile = {visibility:'hidden'}
			};
			if(this.props.index===-1 || (this.props.index>0 && !this.props.questionArray[this.props.index])){
				rBtnVisibile = {visibility:'hidden'}
			}
		return (
			<header>
				<div className='header-content'>

				<i style={lBtnVisibile} onClick={this.props.handleBackBtn} className="fa fa-3x fa-chevron-left"></i>
				<div className="header-container">
					<img src={logo1} alt="Yes on 1600 Logo" width="400"/><br/>
          <div className="header-text-container">
  					<span className="header-text">SAVINGS</span>
  					<span className="header-sub-text">ESTIMATOR</span>
          </div>
				</div>
				<i style={rBtnVisibile} onClick={this.props.handleFwdBtn} className="fa fa-3x fa-chevron-right"></i>
				</div>
			</header>
		);
	}
};

export default Header;
