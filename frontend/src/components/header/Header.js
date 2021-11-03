import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { HeaderSection, InnerSection, InnerContainer, Logo, Heading, Button } from './styles';

const Header = () => (
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
					<Link to='/login'>
						<Button>
							Logout
						</Button>
					</Link>
				</div>
			</InnerSection>
		</HeaderSection>
	</>
);

export default Header;
