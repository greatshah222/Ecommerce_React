import React from 'react';
import Logo from '../../UI/logo/Logo';
import NavigationItems from '../NavigationItems';
import classes from './Toolbar.module.css';

function ToolBar() {
  return (
    <div className={classes.NavBar}>
      <Logo />
      <NavigationItems />
    </div>
  );
}

export default ToolBar;
