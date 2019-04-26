import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from '../Theme';
import Slide from './Slide';

const Slides = ({ slides, currentSlide, className, width }) => {
  const transitionStyle = {
    transform: `translateX(-${currentSlide * width}px)`,
    transition: 'transform ease-out 0.45s',
    width: `${width}px`
  };

  return (
    <Wrapper className={className} style={transitionStyle}>
      {slides.map(({ id, src, alt }) => (
        <Slide key={id} src={src} alt={alt} />
      ))}
    </Wrapper>
  );
};

Slides.propTypes = {
  slides: PropTypes.array.isRequired,
  currentSlide: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired
};

const StyledSlides = styled(Slides)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 0;
  margin: 0;
`;

export default StyledSlides;
