import React from 'react';
import NavigationItem from './NavigationItem';
import classes from './NavigationItems.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSignOutAlt,
  faCartPlus,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';

function NavigationItems(props) {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/'>
        <FontAwesomeIcon icon={faHome} color='white' className={classes.icon} />
        Home
      </NavigationItem>
      <NavigationItem link='/products'>
        <FontAwesomeIcon
          icon={faSignInAlt}
          color='white'
          className={classes.icon}
        />
        Login
      </NavigationItem>
      <NavigationItem link='/cart'>
        <FontAwesomeIcon
          icon={faCartPlus}
          color='white'
          className={classes.icon}
        />
        Cart
      </NavigationItem>
      <NavigationItem link='/logout'>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          color='white'
          className={classes.icon}
        />
        Logout
      </NavigationItem>
    </ul>
  );
}

export default NavigationItems;
