import React from 'react';
import { Link } from 'react-router-dom';

import { STATIC_DATA } from '../../assets/static_data/StaticData';

import logo from '../../assets/images/logo.png';
import { HeaderSection, InnerSection, InnerContainer, Logo, Heading, Button } from './styles';

const Header = () => {
	const redirectUrl = STATIC_DATA.URL.loginPage;

	const logout = () => {
		localStorage.clear()
		window.location.href = redirectUrl
	};

	return (
		<>
			<HeaderSection>
				<InnerSection>
					<InnerContainer>
						<Logo src={logo} alt="logo" />
						<Heading> Marketing Data </Heading>
					</InnerContainer>
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
				</InnerSection>
			</HeaderSection>
		</>
	);
}

export default Header;
