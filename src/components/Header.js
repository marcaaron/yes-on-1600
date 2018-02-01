import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<header>
				<a href='/'>
				<span className="header-text">{this.props.headOne}</span><br/>
				<span className="header-sub-text">{this.props.headTwo}</span>
				</a>
			</header>
		);
	}
};

export default Header;
