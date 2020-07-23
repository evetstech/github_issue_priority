import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { onClick, disabled, text } = props;

  return (
    <button onClick={onClick} disabled={disabled} className='btn-rounded'>
      {text}
    </button>
  );
};

export default Button; 