import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const StyledMain = styled.main`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  text-align: center;
`;

export default function Main() {
  return (
    <StyledMain>
      <Button>Hi there!!!</Button>
    </StyledMain>
  );
}
