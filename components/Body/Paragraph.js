import React from 'react';
import PropTypes from 'prop-types';
import { P } from '../Theme';

const Paragraph = ({ text }) => {
  return (
    <P fontSize={[1, 2]} mb={[2, 4]}>
      {text}
    </P>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired
};

export default Paragraph;
