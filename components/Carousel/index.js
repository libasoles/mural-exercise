import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Wrapper } from '../Theme';
import SlidesNav from './SlidesNav';
import Slides from './Slides';

function useAutoplay(currentSlide, slidesCount, setCurrentSlide) {
  useEffect(() => {
    const autoplay = window.setInterval(() => {
      const nextSlide = currentSlide + 1 !== slidesCount ? currentSlide + 1 : 0;
      setCurrentSlide(nextSlide);
    }, 3000);

    return () => {
      window.clearInterval(autoplay);
    };
  }, [currentSlide]);
}

const Carousel = ({ slides, className, width = 680 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useAutoplay(currentSlide, slides.length, setCurrentSlide);

  return (
    <Wrapper className={className} width={(1, width)}>
      <Slides slides={slides} currentSlide={+currentSlide} width={width} />
      <SlidesNav slides={slides} goToSlide={setCurrentSlide} currentSlide={+currentSlide} />
    </Wrapper>
  );
};

const StyledCarousel = styled(Carousel)`
  overflow: hidden;
  padding: 0;
`;

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
  width: PropTypes.string,
  className: PropTypes.string
};

export default StyledCarousel;
