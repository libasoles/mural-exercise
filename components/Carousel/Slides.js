import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from '../Theme';
import Slide from './Slide';

const Slides = ({ slides, currentSlide, className, width = 680 }) => {
  const transitionStyle = {
    transform: `translateX(-${currentSlide * width}px)`,
    transition: 'transform ease-out 0.45s'
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
  width: PropTypes.number,
  className: PropTypes.string.isRequired
};

const StyledSlides = styled(Slides)`
  display: flex;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export default StyledSlides;
