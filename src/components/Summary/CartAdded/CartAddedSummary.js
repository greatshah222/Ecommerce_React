import React from 'react';
import { Link } from 'react-router-dom';

import classes from './CartAddedSummary.module.css';
import Button from '../../UI/Button/Button';

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
            <Link to='/cart'>
              <Button btnType='Primary' clicked={props.modalClickHanlder}>
                {' '}
                Buy Now
              </Button>
            </Link>
            <Link to='/'>
              <Button clicked={props.modalClickHanlder}>Add More</Button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return <>{content}</>;
}

export default CartAddedSummary;
