import React from 'react';
import classes from './SideBar.module.css';
import NavigationItems from '../NavigationItems';
function SideBar(props) {
  const classNameForOpeningOrClosingSidebar = props.openSideBar
    ? 'Open'
    : 'Close';
  return (
    <div
      className={`${classes.SideBar} ${classes[classNameForOpeningOrClosingSidebar]}`}
    >
      <div className={classes.closeSideBarIcon}>
        <div></div>
        <div onClick={props.closeSideBar}>&times;</div>
      </div>
      <nav>
        <NavigationItems closeSideBar={props.closeSideBar} />
      </nav>
    </div>
  );
}

export default SideBar;
