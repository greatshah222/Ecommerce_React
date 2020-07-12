import React from 'react';
import classes from './Button.module.css';

function Button({ children, clicked, disabled, btnType }) {
  return (
    <button
      className={`${classes.Button} ${classes[btnType]}`}
      disabled={disabled}
      onClick={clicked}
    >
      {children}
    </button>
  );
}

export default Button;
