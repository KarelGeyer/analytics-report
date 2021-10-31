import React from 'react';
import { MainWrapper, Section, Heading } from './styles';

const GraphWrapper = ({ children, heading, month }) => (
  <MainWrapper>
    <Heading>{heading} {month}</Heading>
    <Section>
      {children}
    </Section>
  </MainWrapper>
);

export default GraphWrapper;
