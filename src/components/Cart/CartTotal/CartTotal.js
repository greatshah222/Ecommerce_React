import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import classes from './CartTotal.module.css';
import { Link } from 'react-router-dom';
import { PaypalBtn } from 'react-paypal-checkout';
import PaypalButton from '../../Payment/PaypalButton';

function CartTotal(props) {
  const { cart } = useContext(ProductContext);

  let subTotal = 0,
    cardTax = 0;
  if (cart.length > 0) {
    subTotal = cart.map((el) => el.total).reduce((a, b) => a + b);
    cardTax = (24 / 100) * subTotal;
  }
  const total = subTotal + cardTax;

  return (
    <>
      <div className={classes.ClearCart}>
        {/* // we have to life the props cause we want to redirrect user and props location is available only to direct entity of route */}
        <button
          onClick={props.clearCartHandler}
          className={`${classes.CheckoutButton} ${classes.ClearButton}`}
        >
          Clear Cart
        </button>
      </div>

      <div className={classes.CardTotalPrimary}>
        <div></div>
        <div className={classes.CardTotalSecondary}>
          <div className={classes.CardTotalSecondaryParagraph}>
            <p>
              <strong>SubTotal:</strong>
            </p>
            <p>{subTotal}</p>
          </div>
          <div className={classes.CardTotalSecondaryParagraph}>
            <strong>Tax(24%):</strong>
            <p>{cardTax.toFixed(2)}</p>
          </div>
          <div className={classes.CardTotalSecondaryParagraph}>
            <strong>Total:</strong>
            <p>{total.toFixed(2)}</p>
          </div>
          <PaypalButton
            total={total}
            clearCartHandler={props.clearCartHandler}
          ></PaypalButton>
          {/* <Link to='/' className={classes.CheckoutButton}>
            Checkout
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default CartTotal;
