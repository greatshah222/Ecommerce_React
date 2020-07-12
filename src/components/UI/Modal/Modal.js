import React from 'react';
import classes from './Modal.module.css';
import BackDrop from '../BackDrop/BackDrop';

function Modal(props) {
  return (
    <>
      <BackDrop show={props.show} backDropClose={props.backDropClose} />
      <div
        className={
          props.show ? `${classes.Modal} ${classes.True}` : classes.Modal
        }
      >
        {props.children}
      </div>
    </>
  );
}

export default Modal;
