import React from 'react';

const RenderIf = ({isTrue, children}) => {
  return (
    <>{isTrue ? children : null}</>
  );
};

export default RenderIf;