import React from 'react';
import styled from 'styled-components';

import Hello from './Hello';

const StyledMain = styled.main`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  text-align: center;
`;

const StyledH2 = styled.h2`
  font-weight: 300;
`;

const Button = styled.button`
  color: red;
`;

export default function Main() {
  return (
    <StyledMain>
      <Hello />
      <StyledH2>
        Start editing to see some magic happen!!!
        <span role="img" aria-label="sparkles">
          {' '}
          ✨
        </span>
      </StyledH2>
      <Button>Hi there</Button>
    </StyledMain>
  );
}
