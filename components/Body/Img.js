import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '../Theme';

const Img = ({ value, alt }) => <Image src={value} alt={alt || 'Imagen'} />;

Img.propTypes = {
  value: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default Img;
