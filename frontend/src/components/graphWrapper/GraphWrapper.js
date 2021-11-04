import React from 'react';
import { Wrapper } from './styles';

const GraphWrapper = ({ children, heading, month }) => (
  <Wrapper>
    <h2>{heading} {month}</h2>
    <div>
      {children}
    </div>
  </Wrapper>
);

export default GraphWrapper;
