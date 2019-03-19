import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, P, Title } from '../Theme';
import Container from './styles';

const Hero = props => {
  const { title, text, pb, width } = props;

  return (
    <Container pb={pb} pt={5}>
      <Wrapper width={width || null} align="center">
        <Title fontSize={[3, 5]} lineHeight={[4, 6]} mb={[1, 2]} mt={0}>
          {title}
        </Title>
        {text && (
          <P fontSize={[2, 3]} lineHeight={[3, 4]} fontWeight="300">
            {text}
          </P>
        )}
      </Wrapper>
    </Container>
  );
};

Hero.defaultProps = {
  pb: [0],
  width: null,
  text: null
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  pb: PropTypes.array,
  width: PropTypes.string
};

export default Hero;
