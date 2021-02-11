import React from 'react';
import logo from '../assets/img/FocusDoList-logo.png';
import '../styles/Header.css';
class Header extends React.Component {
	render() {
		return (
			<header className='header'>
				<img className='logo' src={logo} alt='logo' />
			</header>
		);
	}
}

export default Header;
