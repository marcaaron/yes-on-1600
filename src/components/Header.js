import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<header>
				<a href='/'>
					<span className="header-text">YES! ON I-1600</span><br/>
					<span className="header-sub-text">COST CALCULATOR</span>
				</a>
			</header>
		);
	}
};

export default Header;
