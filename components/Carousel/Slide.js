import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Image } from '../Theme';

const Slide = ({ src, alt, className }) => {
  return (
    <div className={className}>
      <Image src={src} alt={alt || 'Slide'} p={[0]} m={[0]} />
    </div>
  );
};

Slide.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

const StyledSlide = styled(Slide)`
  flex: 1 0 100%;
  padding: 0;
  margin: 0;
`;

export default StyledSlide;
