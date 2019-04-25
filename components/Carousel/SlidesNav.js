import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dot from './Dot';

const SlidesNav = ({ slides, className, goToSlide, currentSlide }) => {
  return (
    <nav className={className}>
      <ol>
        {slides.map(({ id }, index) => (
          <Dot key={id} index={index} active={+currentSlide === index} onClick={goToSlide} />
        ))}
      </ol>
    </nav>
  );
};

SlidesNav.propTypes = {
  slides: PropTypes.array.isRequired,
  currentSlide: PropTypes.number.isRequired,
  goToSlide: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};

const StyledSlidesNav = styled(SlidesNav)`
  list-style: none;
  text-align: center;
`;

export default StyledSlidesNav;
