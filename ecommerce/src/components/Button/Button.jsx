import React from 'react';
import './Button.scss';

const Button = ({ onClick, disabled, modifier, children }) => {
  const buttonClass = `button${modifier ? ` button--${modifier}` : ''}`;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;