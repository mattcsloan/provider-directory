import React from 'react';

function Button (props) {
  return (
    <a
      className="btn" 
      onClick={() => props.onToggleProviderForm()}
    >
      {props.label}
    </a>
  )
};

export default Button;