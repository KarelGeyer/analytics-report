import React from 'react';
import { Section, Wrapper } from './styles';

const MaxWidth = ({ children }) => (
	<>
		<Section>
			<Wrapper>
				{children}
			</Wrapper>
		</Section>
	</>
);

export default MaxWidth;
