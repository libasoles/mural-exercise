import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from '../Theme';
import Paragraph from './Paragraph';
import Img from './Img';
import Strong from './Strong';
import IFrame from './IFrame';

const elementTypes = {
  paragraph: Paragraph,
  image: Img,
  strong: Strong,
  iframe: IFrame
};

const Body = ({ content }) => (
  <Wrapper maxWidth={680}>
    {content.map(({ type, ...rest }, index) => {
      const Element = elementTypes[type];
      /* eslint react/no-array-index-key: 1 */
      return <Element key={`${index}${type}`} {...rest} />;
    })}
  </Wrapper>
);

Body.propTypes = {
  content: PropTypes.array.isRequired
};

export default Body;
