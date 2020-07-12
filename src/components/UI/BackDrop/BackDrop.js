import React from 'react';
import classes from './BackDrop.module.css';

function BackDrop(props) {
  return props.show ? (
    <div className={classes.BackDrop} onClick={props.backDropClose}></div>
  ) : null;
}

export default BackDrop;
