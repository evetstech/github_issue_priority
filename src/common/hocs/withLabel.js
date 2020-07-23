import React from 'react';

const withLabel = Component => props => {
  const { label, ...newProps } = props;

  return (
    <>
      <div>
        {label}
      </div>
      <Component {...newProps}/>
    </>
  );
};

export default withLabel;