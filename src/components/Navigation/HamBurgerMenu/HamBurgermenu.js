import React from 'react';
import classes from './HamBurgermenu.module.css';

function HamBurgermenu(props) {
  return (
    <div className={classes.SideBarToggle} onClick={props.toggleSideBar}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default HamBurgermenu;
