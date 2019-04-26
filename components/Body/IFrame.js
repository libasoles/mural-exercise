import React from 'react';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';

const IFrame = ({ value }) => <Iframe width="100%" title={value} url={value} />;

IFrame.propTypes = {
  value: PropTypes.string.isRequired
};

export default IFrame;
