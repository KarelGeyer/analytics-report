import React from 'react';
import logo from '../../assets/images/logo.png';
import { HeaderSection, InnerSection, InnerContainer, Logo, Heading } from './styles';

const Header = () => (
	<>
		<HeaderSection>
			<InnerSection>
				<InnerContainer>
					<Logo src={logo} alt="logo" />
					<Heading> Marketing Data </Heading>
				</InnerContainer>
			</InnerSection>
		</HeaderSection>
	</>
);

export default Header;
