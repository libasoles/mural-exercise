import React from 'react';
import { Player } from 'video-react';
import PropTypes from 'prop-types';

const IFrame = ({ value }) => (
  <iframe width="100%" title={value}>
    <Player>
      <source src={`https:${value}`} />
    </Player>
  </iframe>
);

IFrame.propTypes = {
  value: PropTypes.string.isRequired
};

export default IFrame;
