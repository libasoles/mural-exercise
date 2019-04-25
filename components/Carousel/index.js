import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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

const Carrousel = ({ slides, className }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;
  useAutoplay(currentSlide, slidesCount, setCurrentSlide);

  return (
    <Wrapper className={className} w={(1, 1 / 3)}>
      <Slides slides={slides} currentSlide={+currentSlide} />
      <SlidesNav slides={slides} goToSlide={setCurrentSlide} currentSlide={+currentSlide} />
    </Wrapper>
  );
};

Carrousel.propTypes = {
  slides: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default Carrousel;
