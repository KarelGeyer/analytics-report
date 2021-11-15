import React from 'react';
import { Section, Wrapper } from './styles';

const WithMaxWidth = (Component) => {

  // eslint-disable-next-line react/display-name
  return () => {
    return (
      <>
        <Section>
          <Wrapper>
            <Component />
          </Wrapper>
        </Section>
      </>    
    )
  }
}

export default WithMaxWidth;
