import React from 'react';
import './Input.scss';

const Input = (props) => {
  const { onChange, value, handleEnter } = props;

  return (
    <input className='api-input' value={value} onChange={onChange} onKeyDown={handleEnter} />
  );
};

export default Input;