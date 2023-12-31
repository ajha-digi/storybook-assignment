import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ primary, backgroundColor, size, label, isDisabled, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  console.log(isDisabled);
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  isDisabled:  PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
  isDisabled: false
};
