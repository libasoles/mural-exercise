import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Theme';

function getIndex({ target }) {
  return target.attributes['data-slide'].value;
}

const Dot = ({ index, active, onClick, className }) => (
  <li data-slide={index} className={active ? `${className} active` : className}>
    <Button
      /* es-lint jsx-a11y/click-events-have-key-events: 0 */
      onClick={e => onClick(getIndex(e))}
    >
      {index + 1}
    </Button>
  </li>
);

Dot.propTypes = {
  index: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};

const StyledDot = styled(Dot)`
  display: inline-block;
  width: 6px;
  height: 6px;
  margin: 0 4px;
  border-radius: 5px;
  overflow: hidden;
  text-indent: -999em;
  border: 2px solid #fff;
  cursor: pointer;
  list-style: none;
  background: ${({ active, theme }) => (active ? theme.colors.coral : theme.colors.grayMural)};
`;

export default StyledDot;
