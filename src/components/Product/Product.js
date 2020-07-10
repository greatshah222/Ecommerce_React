import React from 'react';
import classes from './Product.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartPlus,
  faInfoCircle,
  faCartArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Product(props) {
  const { title, price, img, company, summary, inCart } = props.product;
  return (
    <div className={`${classes.card} ${classes.middle}`}>
      <div className={classes.front}>
        {/* <Link to='/details'> </Link> */}
        <FontAwesomeIcon
          icon={faInfoCircle}
          color='black'
          className={classes.infoIcon}
        />
        <img src={require(`../../${img}`)} alt='img' />

        <div className={classes.text}>
          <p>{title}</p>
          <h3>{price} €</h3>
        </div>
      </div>
      <div className={classes.back}>
        <div className={`${classes.backContent} ${classes.middle}`}>
          <div className={classes.detailInfo}>
            <h4>{title}</h4>

            <p>{summary}</p>

            <div className={classes.sm}>
              <button
                onClick={() => console.log('object')}
                className={classes.buttonCart}
              >
                {!inCart ? (
                  <FontAwesomeIcon
                    icon={faCartPlus}
                    color='white'
                    size='2x'
                    className={classes.cartIcon}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCartArrowDown}
                    color='red'
                    size='2x'
                    className={classes.cartIcon}
                  />
                )}
              </button>
              <Link to='/details' className={classes.watchMore}>
                Watch More
              </Link>
            </div>
            <p>
              {' '}
              BY: <strong>{company}</strong>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
