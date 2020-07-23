import React from 'react';
import './Input.scss';

const Input = ({ onChange, value }) => {
  return (
    <input className='api-input' value={value} onChange={onChange} />
  );
};

export default Input;