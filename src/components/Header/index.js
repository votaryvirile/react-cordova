import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import Logo from '../../assets/images/reactlogo.svg';
import { 
	HeaderWrapper,
	HeaderElement,
	ReactLogo,
} from './styles';

function Header() {
	const [ active, setActive ] = useState('home');
	const [ element, setElement ] = useState([
		{
			name: 'Hire Me',
			active: 'hire',
			link: 'hire',
		},
		{
			name: 'About',
			active: 'about',
			link: 'about'
		},
		{
			name: 'Home',
			active: 'home',
			link: ''
		}
	]);
	
	useEffect(() => {
		if(location.pathname.indexOf('about') >= 0) {
			setActive('about');
		} else if(location.pathname.indexOf('hire') >= 0) {
			setActive('hire');
		} else {
			setActive('home');
		}
	});

	return (
		<HeaderWrapper>
			<ReactLogo>
				<ReactSVG src={Logo} />
			</ReactLogo>
			{element.map((item) => (
			<HeaderElement key={item.name}>
				<NavLink 
					onClick={() => setActive(`${item.active}`)} 
					className={ 
						active === `${item.active}` ? 
						'linkWrapper activeItem' : 'linkWrapper'
					} 
					to={`${item.link}`}
				>
					{item.name}
				</NavLink>
			</HeaderElement>
			))};
		</HeaderWrapper>
	);
}

export default Header;