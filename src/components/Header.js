import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
	render() {
		return (
			<header>
				<i onClick={this.props.handleBackBtn} className="fa fa-3x fa-chevron-circle-left"></i>
				<div>
					<span className="header-text">YES! ON I-1600</span><br/>
					<span className="header-sub-text">COST CALCULATOR</span>
				</div>
				<i onClick={this.props.handleFwdBtn} className="fa fa-3x fa-chevron-circle-right"></i>
			</header>
		);
	}
};

export default Header;
