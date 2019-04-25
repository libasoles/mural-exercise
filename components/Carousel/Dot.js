import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Theme';

function getIndex({ currentTarget }) {
  return currentTarget.value;
}

const Dot = ({ index, active, onClick, className }) => (
  <li className={active ? `${className} active` : className}>
    <Button
      /* es-lint jsx-a11y/click-events-have-key-events: 0 */
      onClick={e => onClick(getIndex(e))}
      style={{
        border: 0,
        padding: 0,
        margin: 0,
        display: 'block',
        background: 'transparent',
        width: '100%',
        height: '100%'
      }}
      value={index}
    />
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
  background: ${({ active, theme }) => (active ? theme.colors.textDark : theme.colors.textLight)};
`;

export default StyledDot;
