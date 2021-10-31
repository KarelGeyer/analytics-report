import React from 'react';
import { MaxWidthSection, BasicLayout } from './styles';

const MaxWidth = ({ children }) => (
	<>
		<MaxWidthSection>
			<BasicLayout>
				{children}
			</BasicLayout>
		</MaxWidthSection>
	</>
);

export default MaxWidth;
