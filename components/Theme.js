import styled from 'styled-components';

import {
  space,
  fontSize,
  fontFamily,
  display,
  color,
  fontWeight,
  textAlign,
  width,
  maxWidth,
  lineHeight,
  margin,
  padding,
  flexWrap,
  justifyContent,
  alignContent,
  alignItems
} from 'styled-system';

import UnstyledLogo from './Logo';

const Logo = styled(UnstyledLogo)`
  cursor: pointer;
`;

const App = styled.div`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.text};
`;

const A = styled.a`
  color: ${props => props.theme.colors.coral};
  font-size: ${props => `${props.theme.fontSizes[2]}px`};
  ${color};
  cursor: pointer;
`;

const P = styled.p`
  ${space};
  ${fontSize};
  ${color};
  ${lineHeight};
  ${fontWeight};
  ${textAlign};
  ${maxWidth};
  ${display};
  ${fontFamily};
`;

export const Title = styled.h1`
  ${space};
  ${fontSize};
  ${lineHeight};
  text-align: center;
  color: ${props => props.theme.colors.text};
  font-weight: 900;
`;

const Button = styled.button`
  text-align: center;
  cursor: pointer;
  color: ${props => props.theme.colors.gray};
  font-weight: 700;
  text-transform: uppercase;
  max-width: 260px;
  padding: 12px 0px;
  list-style: none;
  background: rgb(218, 218, 218);
  margin: 0px 10px 10px;
  border-radius: 6px;
`;

const Image = styled.img`
  margin: 10px;
`;

const Wrapper = styled.section`
  ${color}
  max-width: ${props => props.width || '1240px'};
  text-align: ${props => props.align || 'left'};
  margin: 0 auto;
  padding: 0 34px;
  ${width};
  ${maxWidth};
  ${margin};
  ${padding};
`;

const FlexWrapper = styled(Wrapper)`
  display: flex;
  ${flexWrap};
  ${justifyContent};
  ${alignItems};
  ${alignContent};
`;

export { Logo, App, A, P, Image, Button, Wrapper, FlexWrapper };
