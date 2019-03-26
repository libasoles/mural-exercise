import { createGlobalStyle, css } from 'styled-components';

const fontFace = (family, style, weight, filename) => css`
  @font-face {
    font-family: '${family}';
    font-style: ${style};
    font-weight: ${weight};
    font-display: fallback;
    src: url(/static/fonts/${filename}.woff2) format('woff2');
    }
`;

const baseStyles = css`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  font-family: 'Proxima Nova', -apple-system, 'Segoe UI', 'Helvetica Neue', sans-serif;
`;

const Baseline = createGlobalStyle`
  ${fontFace('Proxima Nova', 'light', 300, 'ProximaNova-Light')}
  ${fontFace('Proxima Nova', 'normal', 400, 'ProximaNova-Regular')}
  ${fontFace('Proxima Nova', 'normal', 600, 'ProximaNova-Semibold')}
  ${fontFace('Proxima Nova', 'italic', 700, 'ProximaNova-Bold')}

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
