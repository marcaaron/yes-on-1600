import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
	render() {
		return (
			<header>
				<div className='header-content'>
				<i onClick={this.props.handleBackBtn} className="fa fa-3x fa-chevron-left"></i>
				<div>
					<span className="header-text">YES! ON I-1600</span><br/>
					<span className="header-sub-text">COST CALCULATOR</span>
				</div>
				<i onClick={this.props.handleFwdBtn} className="fa fa-3x fa-chevron-right"></i>
				</div>
			</header>
		);
	}
};

export default Header;
