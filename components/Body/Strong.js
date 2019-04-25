import React from 'react';
import PropTypes from 'prop-types';

const Strong = ({ text }) => <b>{text}</b>;

Strong.propTypes = {
  text: PropTypes.string.isRequired
};

export default Strong;
