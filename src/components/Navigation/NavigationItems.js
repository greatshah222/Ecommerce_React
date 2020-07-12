import React from 'react';
import NavigationItem from './NavigationItem';
import classes from './NavigationItems.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCartPlus } from '@fortawesome/free-solid-svg-icons';

function NavigationItems(props) {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem closeSideBar={props.closeSideBar} link='/'>
        <FontAwesomeIcon icon={faHome} className={classes.icon} />
        Home
      </NavigationItem>
      {/* <NavigationItem link='/products'>
        <FontAwesomeIcon
          icon={faSignInAlt}
          color='white'
          className={classes.icon}
        />
        Login
      </NavigationItem> */}
      <NavigationItem link='/cart' closeSideBar={props.closeSideBar}>
        <FontAwesomeIcon icon={faCartPlus} className={classes.icon} />
        Cart
      </NavigationItem>
      {/* <NavigationItem link='/logout'>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          
          className={classes.icon}
        />
        Logout
      </NavigationItem> */}
    </ul>
  );
}

export default NavigationItems;
