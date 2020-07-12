import React from 'react';
import Logo from '../../UI/logo/Logo';
import NavigationItems from '../NavigationItems';
import classes from './Toolbar.module.css';
import HamBurgermenu from '../HamBurgerMenu/HamBurgermenu';

function ToolBar(props) {
  return (
    <div className={classes.NavBar}>
      <HamBurgermenu toggleSideBar={props.toggleSideBar} />
      <div>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </div>
  );
}

export default ToolBar;
