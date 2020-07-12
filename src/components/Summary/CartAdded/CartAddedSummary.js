import React from 'react';
import { Link } from 'react-router-dom';

import classes from './CartAddedSummary.module.css';

function CartAddedSummary(props) {
  let content = null;
  if (props.cartProductSummary) {
    const { title, price, img } = props.cartProductSummary;
    content = (
      <>
        <p onClick={props.modalClickHanlder} className={classes.CloseButton}>
          &times;
        </p>
        <div className={classes.CartAddedSummary}>
          <h3>Added To Cart</h3>
          <img src={require(`../../../${img}`)} alt='img' height='150px' />{' '}
          <h4> Product: {title}</h4>
          <h4>Price: {price} €</h4>
          <div className={classes.LinkSummary}>
            <Link
              to='/cart'
              className={classes.BuyNow}
              onClick={props.modalClickHanlder}
            >
              Buy Now
            </Link>
            <Link
              to='/'
              className={classes.ContinueShopping}
              onClick={props.modalClickHanlder}
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </>
    );
  }

  return <>{content}</>;
}

export default CartAddedSummary;
