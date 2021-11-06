import React from 'react';
import { Link } from 'react-router-dom';

import { STATIC_DATA } from '../../assets/static_data/StaticData';

import logo from '../../assets/images/logo.png';
import { Section, Wrapper, Button } from './styles';

const Header = () => {
	const redirectUrl = STATIC_DATA.URL.LOGIN_PAGE;

	const logout = () => {
		localStorage.clear()
		window.location.href = redirectUrl
	};

	return (
		<>
			<Section>
				<div>
					<Wrapper>
						<img src={logo} alt="logo" />
						<h1> Marketing Data </h1>
					</Wrapper>
					<div>
						<Link to='/account'>
							<Button>
								Můj Úcet
							</Button>
						</Link>
						<Button onClick={logout}>
							Logout
						</Button>
					</div>
				</div>
			</Section>
		</>
	);
}

export default Header;
