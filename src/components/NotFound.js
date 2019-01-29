import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  text-align: center;
`;

const StyledSpan = styled.span.attrs({
  role: 'img',
  'aria-label': 'unicorn face',
  children: '🦄'
})`
  display: block;
  font-size: 3em;
`;

export default function NotFound() {
  return (
    <StyledMain>
      <h1>Not Found</h1>
      <StyledSpan />
    </StyledMain>
  );
}
