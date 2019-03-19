import { createGlobalStyle, css } from 'styled-components';

const baseStyles = css`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Baseline = createGlobalStyle`
  html,
  body,
  :root {
    background-color: #fafafa;
    color: #222;
    ${baseStyles}
  }

  img {
    max-width: 100%;
  }
`;

export default Baseline;
