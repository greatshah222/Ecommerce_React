import React from 'react';
import classes from './Cart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Cart(props) {
  const { img, price, count, total, title, id } = props.cart;
  return (
    <div className={`${classes.CartHeading} ${classes.CartSecondary}`}>
      <img src={require(`../../${img}`)} alt='img' height='80px' width='80px' />
      <div className={classes.smallScreenDisplay}>
        {' '}
        <p className={classes.pSmallScreen}>Product:</p>
        <p> {title}</p>
      </div>

      <div className={classes.smallScreenDisplay}>
        <p className={classes.pSmallScreen}>Price:</p>
        <p>{price} €</p>
      </div>
      <p className={classes.smallScreenDisplayIcon}>
        <span
          onClick={() => props.countDecrement(id)}
          className={`${classes.span} ${classes.spanNegative}`}
        >
          &minus;
        </span>
        <span className={classes.spanValue}>{count}</span>
        <span
          onClick={() => props.countIncrement(id)}
          className={`${classes.span} ${classes.spanPositive}`}
        >
          +
        </span>
      </p>
      <p onClick={() => props.deleteSingleProductFromCart(id)}>
        <FontAwesomeIcon
          icon={faTrashAlt}
          color='red'
          cursor='pointer'
          className={classes.infoIcon}
        />
      </p>
      <div className={classes.smallScreenDisplay}>
        <p className={classes.pSmallScreen}>Total</p>
        <p>{total}€</p>
      </div>
    </div>
  );
}

export default Cart;
